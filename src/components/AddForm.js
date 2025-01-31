import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './productSlice';  // Import the addProduct function

const AddForm = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState(0);
  const [mark, setMark] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      product_name: productName,
      prix: price,
      description,
      stock,
      mark_product: mark,
      image,
    };

    dispatch(addProduct(newProduct));  // Dispatch the addProduct action
  };

  return (
   
    <form onSubmit={handleSubmit}>

      <table className='form'>
      <h2>Ajouter un produit</h2>

        <tr>
          <td><input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
        required
      /></td>
        </tr>
      <tr>
        <td><input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      /></td>
      
      </tr>
      <tr>
        <td><textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      /></td>
      
      </tr>
      
      <tr><td><input
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        placeholder="Stock"
      /></td></tr>
      
      <tr>
        <td><input
        type="text"
        value={mark}
        onChange={(e) => setMark(e.target.value)}
        placeholder="Brand"
      /></td>
      
      </tr>
      <tr>
        <td> <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      /></td>
     
      </tr>
      <tr>
        <button type="submit">Add Product</button></tr>
      
    </table>
    </form>

      
  );
};

export default AddForm;
