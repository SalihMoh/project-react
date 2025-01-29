// src/components/Products.js
import React from 'react';
import data from '../products.json';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import { useNavigation } from '../components/navigation'; 

const images = {
    'image1.jpg': image1,
    'image2.jpg': image2,
    'image3.jpg': image3
};

const DisplayProducts = () => {
    const handleNavigation = useNavigation(); 

    return (
        <>
            <div id="search-bar">
                <button type='button'>Faire une offre !</button>
                <button type='button' onClick={() => handleNavigation('/AddForm')}>Add produit</button>
                <input type="text" id="search" placeholder="Search for a product..." />
            </div>
            {data.map((product, i) => (
                <div key={i} className="product">
                    <img src={images[product.image]} alt="this image could not load" />
                    <div className='product-detail'>
                        <h3>{product.product_name}</h3>
                        <p>{product.description}</p>
                        <p>Prix : {product.prix} $</p>
                    </div>
                    <div className='btn-actions'>
                        <button>Delete</button>
                        <button>Update</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default DisplayProducts;