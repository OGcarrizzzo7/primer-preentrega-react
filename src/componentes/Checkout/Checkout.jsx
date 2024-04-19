import React, { useState, useContext } from 'react';
import { Timestamp, writeBatch, getDocs, query, where, collection, inOperator, addDoc, documentId } from 'firebase/firestore'; 
import { CartContext } from '../context/CartContext';
import { db } from '../services/firebase/firebaseConfig';
import CheckoutForm from './CheckoutForm'; 

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'products');
            const productsQuery = query(productsRef, where(documentId(), inOperator(ids)));
            const productsSnapshot = await getDocs(productsQuery);

            const productsAddedFromFirestore = productsSnapshot.docs.map(doc => {
                const data = doc.data();
                return { id: doc.id, ...data };
            });

            productsAddedFromFirestore.forEach(prod => {
                const cartItem = cart.find(item => item.id === prod.id);
                if (cartItem.quantity > prod.stock) {
                    outOfStock.push(prod);
                }
            });

            if (outOfStock.length > 0) {
                console.log('Productos fuera de stock:', outOfStock);
            } else {
                const orderRef = collection(db, 'orders');
                const newOrderRef = await addDoc(orderRef, objOrder);
                setOrderId(newOrderRef.id);
            }

            clearCart();

            setLoading(false);
        } catch (error) {
            console.error('Error creating order:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Se está generando su orden...</h1>;
    }

    if (orderId) {
        return <h1>El Id de su orden es {orderId}</h1>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout;