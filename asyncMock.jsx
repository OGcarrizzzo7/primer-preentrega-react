const products = [
    {
        id: '1',
        name: 'Bielas Forjadas VW',
        price: 500000,
        category: 'Bielas',
        img: './public/img/bielas.jpg',
        stock: 27,
        description:'Bielas forjadas para VW 144mm' 
    },
    {
        id: '2',
        name: 'Pistones Forjados Fiat 88mm',
        price: 450000,
        category: 'Pistones',
        img: './public/img/pistones.jpg',
        stock: 32,
        description: 'Pistones forjados para motor Fiat Tipo 1.6' 
    },
    {
        id: '3',
        name: 'Fueltech FT500',
        price: 2500000,
        category: 'Inyeccion',
        img: './public/img/fueltech.png',
        stock: 7,
        description: 'Inyeccion programable FT550' 
    },
    {
        id: '4',
        name: 'Intercooler FTX',
        price: 250000,
        category: 'Inyeccion',
        img: './public/img/inter.jpg',
        stock: 12,
        description: 'Intercooler alto flujo FTX' 
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category));
        }, 500);
    });
};