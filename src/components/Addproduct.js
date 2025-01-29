// AddProduct.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from './data.js'; // Assuming this is where your initial product data is stored

function AddProduct() {
    const [ProductName, setProductName] = useState('');
    const [ProductPrice, setProductPrice] = useState('');
    const [ProductDescr, setProductDescr] = useState('');
    const [ProductStock, setProductStock] = useState('');
    const [Productimg, setProductImg] = useState(''); // Added state for image
    const navigate = useNavigate(); // Assuming you want to navigate after submission

    function handleSubmit(event) {
        event.preventDefault();

        // Create new product object
        const newProduct = {
            id: data.length + 1, // Consider a better ID generation strategy
            product_name: ProductName,
            description: ProductDescr,
            prix: ProductPrice,
            stock: ProductStock,
            image: Productimg,
        };

        // Here you would typically send newProduct to your backend or update your state
        data.push(newProduct); // This is not recommended for real applications

        console.log(newProduct); // Log the new product for debugging

        // Optionally navigate to another page after submission
        navigate('/'); // Change this to your desired route
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Product Name:</label></td>
                            <td><input type="text" value={ProductName} onChange={(e) => setProductName(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><label>Description:</label></td>
                            <td><input type='text' value={ProductDescr} onChange={(e) => setProductDescr(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><label>Product Price:</label></td>
                            <td><input type="number" value={ProductPrice} onChange={(e) => setProductPrice(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><label>Stock:</label></td>
                            <td><input type="number" value={ProductStock} onChange={(e) => setProductStock(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><label>Image URL:</label></td>
                            <td><input type="text" value={Productimg} onChange={(e) => setProductImg(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{ textAlign: 'center' }}>
                                <button type='submit'>SUBMIT</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
}

export default AddProduct;