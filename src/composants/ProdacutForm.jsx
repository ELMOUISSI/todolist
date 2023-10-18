import React from 'react';
import axios from 'axios';

function ProductForm({ product, setProduct }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://fakestoreapi.com/products', product);
      alert('Product added!');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} >
        <div className='mb-3'>
          <label className='form-label'>Title:</label>
          <input
            className='form-control'
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label  className='form-label'>Price:</label>
          <input
            className='form-control'
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label  className='form-label'>Description:</label>
          <textarea
           className='form-control'
            name="description"
            value={product.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label  className='form-label'>Category:</label>
          <input
            className='form-control'
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label  className='form-label'>Image URL:</label>
          <input
          className='form-control'
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit"  className='btn btn-primary'>Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
