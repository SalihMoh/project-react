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

      <table className='addform'>
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
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      </tr>
      <tr>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      </tr>
      <tr><input
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        placeholder="Stock"
      /></tr>
      
      <tr>
      <input
        type="text"
        value={mark}
        onChange={(e) => setMark(e.target.value)}
        placeholder="Brand"
      />
      </tr>
      <tr>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
      </tr>
      <tr><button type="submit">Add Product</button></tr>
      
    </table>
    </form>

      
  );
};

export default AddForm;
