import React from 'react';
import ProductCard from '../productCard/ProductCard';
import './ProductList.css'


const ProductList = ({ products }) => {
  return (
    <div className="productListContainer">
      {products.map(product => <ProductCard product={product} key={product.id} />)}
    </div>
  )
}

export default ProductList;