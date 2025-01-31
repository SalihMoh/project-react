import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from './productSlice';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateForm = () => {
  const { id } = useParams(); // Get the id from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Convert id from URL (string) to a number or string depending on your id type in data.json
  const productId = isNaN(id) ? id : Number(id); // Handle string or number IDs

  // Get the list of products from Redux state
  const products = useSelector((state) => state.products.items);

  // Find the product based on the id
  const product = products.find((p) => p.id === String(id)); // Convert `id` to string if necessary


  // State for the form inputs
  const [productName, setProductName] = useState(product?.product_name || '');
  const [price, setPrice] = useState(product?.prix || '');
  const [description, setDescription] = useState(product?.description || '');
  const [stock, setStock] = useState(product?.stock || 0);
  const [mark, setMark] = useState(product?.mark_product || '');
  const [image, setImage] = useState(product?.image || '');

  // Effect to update form fields when product is fetched
  useEffect(() => {
    if (product) {
      setProductName(product.product_name);
      setPrice(product.prix);
      setDescription(product.description);
      setStock(product.stock);
      setMark(product.mark_product);
      setImage(product.image);
    }
  }, [product]);

  // Submit the form to update the product
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProduct = {
      id: productId, // Ensure id is correct format
      product_name: productName,
      prix: price,
      description,
      stock,
      mark_product: mark,
      image,
    };

    dispatch(updateProduct(updatedProduct)); // Dispatch the action to update the product
    navigate('/'); // Redirect to the home page after the update
  };

  // Show a loading message if the product is not found yet
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h3>Editer un produit</h3>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        placeholder="Stock"
      />
      <input
        type="text"
        value={mark}
        onChange={(e) => setMark(e.target.value)}
        placeholder="Brand"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateForm;
