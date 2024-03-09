import React, { useState,useEffect } from 'react';

const ProductForm = (props) => {
  const [productId, setProductId] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [productList, setProductList] = useState(JSON.parse(localStorage.getItem('products')) || []);
 
  
  const skinCare =  []

  const electronic = []

  const food = []
   for (let index = 0; index < productList.length; index++) {
    if (productList[index].category === 'Food'){
      food.push(productList[index])
          }else if (productList[index].category === 'Electronics'){ 
            electronic.push(productList[index])
         }else { skinCare.push(productList[index])}
   
    
   }   
  const handleAddProduct = (e) => {
    e.preventDefault();
   // console.log({ productId, productName, sellingPrice, category });

   
      let data = {
        id: productId,
        price: sellingPrice,
        name: productName,
        category: category,
      };

    //  localStorage.setItem(data.id, JSON.stringify(data));
      
     
      setProductList( (prevState) => {
        return [...prevState, data]
       });
      
      setProductId('');
      setProductName('');
      setSellingPrice('');
    }
  

  const handleDeleteProduct = (id) => {
    const updatedProductList = productList.filter(
      (product) => product.id !== id
    );
    setProductList(updatedProductList);
    localStorage.removeItem(id);
  };

  useEffect( () => {
    localStorage.setItem('products' ,JSON.stringify(productList))
  },[productList])
  

 

  return (
    <div>
      <form onSubmit={handleAddProduct}>

        <label htmlFor='pId'>Product Id :  </label>
        <input 
         id='pId'
         type="text"
         value = {productId}
         onChange = { (e) =>  setProductId(e.target.value) }
         required
         />
          <br />
        <label htmlFor='sId'>Selling Price :  </label>
        <input 
         id='sId'
         type="number"
         value = {sellingPrice}
         onChange = { (e) =>  setSellingPrice(e.target.value) }
         required
          />
            <br />
        <label htmlFor='pNm'>Product Name:  </label>
        <input 
         id='pNm'
         type="text"
         value = {productName}
         onChange = { (e) =>  setProductName(e.target.value) }
         required
         />
           <br />
        <label>Choose a Category :</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
           <option value={''}>Select Item</option>
            <option value={'Food'}>Food Items</option>
            <option value={'Electronics'}>Electronics Items</option>
            <option value={'SkinCare'}>SkinCare Items</option> 
        </select>
        <button onClick = {handleAddProduct}>Add Product</button>
        </form>

        <div>
          <h2>Products : </h2>
             <h2>Food Items </h2>
          <ul>
            {food.map((product) => { 
              console.log(product)
              return  <li key={product.id}>
                {product.name} - {product.category} - {product.price} 
                <button onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </button>
              </li>
             })}
          </ul>

          <h2>Electronics Items </h2>
          <ul>
            {electronic.map((product) => { 
              console.log(product)
              return  <li key={product.id}>
                {product.name} - {product.category} - {product.price} 
                <button onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </button>
              </li>
             })}
          </ul>

          <h2>SkinCare Items </h2>
          <ul>
            {skinCare.map((product) => { 
              console.log(product)
              return  <li key={product.id}>
                {product.name} - {product.category} - {product.price} 
                <button onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </button>
              </li>
             })}
          </ul>
        </div>
 
    
    </div>
  );
};

export default ProductForm;