import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from './productSlice';
import { useNavigate } from 'react-router-dom';
import ProductAction from './ProductAction';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

const images = {
  'image1.jpg': image1,
  'image2.jpg': image2,
  'image3.jpg': image3,
};

const DisplayProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleUpdate = (id) => {
    // Navigate to the update form for the selected product
    navigate(`/update/${id}`);
  };

  const filteredProducts = products.filter(product => 
    product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div id="search-bar">
        <button type="button">Faire une offre !</button>
        <button type="button" onClick={() => navigate('/AddForm')}>Add produit</button>
        <input
          type="text"
          id="search"
          placeholder="Search for a product..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {filteredProducts.length === 0 ? (
        <div>No products found</div>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={images[product.image] ?? product.image} alt={product.product_name} width="100" />
            <div className="product-detail">
              <h3>{product.product_name}</h3>
              <p>{product.description}</p>
              <p>Prix : {product.prix} $</p>
            </div>
            <ProductAction 
              product={product} 
              onDelete={handleDelete} 
              onUpdate={() => handleUpdate(product.id)} 
            />
          </div>
        ))
      )}
    </>
  );
};

export default DisplayProducts;
