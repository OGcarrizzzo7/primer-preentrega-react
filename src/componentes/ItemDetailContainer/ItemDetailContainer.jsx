import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getProductById } from '../../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        console.log("Item ID:", itemId); 
        getProductById(itemId)
            .then(response => {
                console.log("Product details:", response); 
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    console.log("Product state:", product); 

    if (!product) {
        return <div>Loading...</div>; 
    }

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer;