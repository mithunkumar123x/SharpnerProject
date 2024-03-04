import React, { useState ,useEffect } from "react";

const ProductList = ({ productList , selectedCategory }) => {
 const [filteredProducts,setFilteredProducts] = useState([]);
 
 useEffect( () => {
    const filteredProducts = () => {
        if (selectedCategory) {
            const filtered = productList.filter(product => product.category === selectedCategory);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(productList);
        }
    };
    filteredProducts();
 } , [productList,selectedCategory]);
return ( 
    <div>
        <h2>Product List </h2>
        
        <ul>
            {filteredProducts.map(products => (
                <li>{productList.productId } - {productList.sellingPrice }</li>
            ))}
        </ul>
    </div>
) 
}
export default ProductList;
