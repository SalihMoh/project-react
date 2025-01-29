import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from './data.js';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import ProductAction from './ProductAction.js'; // Updated import

const images = {
    'image1.jpg': image1,
    'image2.jpg': image2,
    'image3.jpg': image3
};

const DisplayProducts = () => {
    const [products, setProducts] = useState(data);
    const navigate = useNavigate();

    const handleDelete = (id) => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    };

    const handleUpdate = (updatedProduct) => {
        setProducts(prevProducts => 
            prevProducts.map(product => 
                product.id === updatedProduct.id ? updatedProduct : product
            )
        );
    };

    return (
        <>
            <div id="search-bar">
                <button type='button'>Faire une offre !</button>
                <button type='button' onClick={() => navigate('/AddForm')}>Add produit</button>
                <input type="text" id="search" placeholder="Search for a product..." />
            </div>
            {products.map((product) => (
                <div key={product.id} className="product">
                    <img src={images[product.image] || product.image} alt="Product" width="100" />
                    <div className='product-detail'>
                        <h3>{product.product_name}</h3>
                        <p>{product.description}</p>
                        <p>Prix : {product.prix} $</p>
                    </div>
                    <ProductAction product={product} onDelete={handleDelete} onUpdate={handleUpdate} />
                </div>
            ))}
        </>
    );
};

export default DisplayProducts;