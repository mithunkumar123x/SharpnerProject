import { useEffect, useState } from 'react'
import ProductList from './components/productList/productList'
import './App.css'
import ProductForm from './components/productForm';

const App = () => {
  const [productList,setProductList] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState([]);

  const addProduct = (product) => {
      const updatedProductList = [...productList,product];
      setProductList(updatedProductList);
      localStorage.setItem('productList', JSON.stringify(updatedProductList))
  };

  useEffect( () => {
    const storedProductList = JSON.parse(localStorage.getItem('productList'));
       if(storedProductList) {
         setProductList(storedProductList);
       }
  },[]);

  return (
    <div>
      <ProductForm  addProduct={addProduct}></ProductForm>
      <div>
      <ProductList productList={productList} selectedCategory={selectedCategory}></ProductList>
      </div>
    </div>

  )
}

export default App
