import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [productId, setProductId] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');

  const handleAddProduct = () => {
    addProduct({ productId, sellingPrice, productName, category });
    setProductId('');
    setSellingPrice('');
    setProductName('');
    setCategory('');
  };

  return (
    <div>
        <label htmlFor='pId'>Product Id :  </label>
        <input 
         id='pId'
         type="text"
         value = {productId}
         onChange = { (e) =>  setProductId(e.target.value) }
         placeholder= " " />
        <label htmlFor='sId'>Selling Price :  </label>
        <input 
         id='sId'
         type="number"
         value = {sellingPrice}
         onChange = { (e) =>  setSellingPrice(e.target.value) }
         placeholder= " " />
        <label htmlFor='pNm'>Product Name:  </label>
        <input 
         id='pNm'
         type="text"
         value = {productName}
         onChange = { (e) =>  setProductName(e.target.value) }
         placeholder= " " />
        <label>Choose a Category :</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Food Items</option>
            <option>Electronics Items</option>
            <option>SkinCare Items</option> 
        </select>
        <button onClick = {handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductForm;