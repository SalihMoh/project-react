import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from './productSlice';
import { useNavigate } from 'react-router-dom';

const ProductAction = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
  };

  return (
    <div className="product-actions">
      <button type="button" className="delete-btn" onClick={handleDelete}>Delete</button>
      <button type="button" className="update-btn" onClick={() => navigate(`/update/${product.id}`)}>
        Update
      </button>
    </div>
  );
};

export default ProductAction;
