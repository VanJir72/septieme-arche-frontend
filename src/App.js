import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ProductsPage from './pages/public-pages/products/ProductsPage'
import ProductPage from './pages/public-pages/product/ProductPage'
import CartPage from './pages/public-pages/cart/CartPage'
import MyAccountPage from './pages/public-pages/myAccount/MyAcountPage'
import InscriptionPage from './pages/public-pages/inscriptionPage/InscriptionPage'
import ConnectionPage from './pages/public-pages/connectionPage/ConnectionPage'

import { fetchProductsAsync } from './redux/productSlice';
import { CART_SLICE_ACTIONS } from './redux/cartSlice';


function App() {

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]); 




  useEffect(() => {
    const cartItemsStorage = localStorage.getItem('cart');
    console.log('cartItemsStorage = ' + cartItemsStorage);
    if (cartItemsStorage) {
      const cartItems = JSON.parse(cartItemsStorage);
      console.log(cartItems);
      dispatch(CART_SLICE_ACTIONS.setCartItems(cartItems));  
    }
  }, [dispatch]);






  return (
    <div className="app">
      <Header />
      <div className="container mt-5">
        <Routes>
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:id' element={<ProductPage />} />
          {/* <Route path='/products?category=' element={<CategoryPage />} /> : For V2*/} 
          <Route path='/cart' element={<CartPage />} />
          <Route path='/myAccount' element={<MyAccountPage />} />
          <Route path='/signUp' element={<InscriptionPage />} />
          <Route path='/signIn' element={<ConnectionPage />} />
          <Route path="/" element={<Navigate replace to="/products" />} />
        </Routes>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
