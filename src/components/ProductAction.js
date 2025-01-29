import React, { useState } from 'react';

const ProductAction = ({ product, onUpdate, onDelete }) => {
    const [productName, setProductName] = useState(product.product_name);
    const [price, setPrice] = useState(product.prix);
    const [description, setDescription] = useState(product.description);
    const [stock, setStock] = useState(product.stock || 0);
    const [mark, setMark] = useState(product.mark_product || '');
    const [image, setImage] = useState(product.image || '');

    const handleUpdate = (event) => {
        event.preventDefault();
        const updatedProduct = {
            ...product,
            product_name: productName,
            prix: price,
            description: description,
            stock: stock,
            mark_product: mark,
            image: image
        };
        onUpdate(updatedProduct);
    };

    const handleDelete = () => {
        onDelete(product.id);
    };

    return (
        <div>
            <form>
                <button type='button' onClick={handleDelete}>Delete</button>
                <button>update</button>
            </form>
        </div>
    );
};

export default ProductAction;