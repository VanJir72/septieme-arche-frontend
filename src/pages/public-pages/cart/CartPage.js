import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../../../components/cartItem/CartItem';
import useCartTotal from '../../../hooks/useCartTotal';
import { CART_SLICE_ACTIONS } from '../../../redux/cartSlice';

import './CartPage.css';

const CartPage = () => {

  const cartItems = useSelector(store => store.cart.items);
  const cartTotal = useCartTotal();
  const dispatch = useDispatch();

  return (
    <div className="text-dark">
      <h2>Panier</h2>
      <div className="header">
      <button className='btn btn-danger' onClick={() => dispatch(CART_SLICE_ACTIONS.clearCart())}>
          Vider le Panier
        </button>
        <button className='btn btn-primary' onClick={console.log("Finaliser la Commande")}>
          Passer la Commande
        </button>
      </div>
      <div className="cartContainer">
        <div className="checkoutHeader">
          <div className='header-block'>
            <span>Article</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantité</span>
          </div>
          <div className='header-block'>
            <span>Prix</span>
          </div>
          <div className='header-block'>
            <span>Supprimer</span>
          </div>
        </div>
        {cartItems.map(cartItem => (
          <CartItem cartItem={cartItem} key={cartItem.id} />
        ))}
        <div className="total">
          Prix Total TTC : { " " + cartTotal.toFixed(2)}$
        </div>
      </div>
    </div>
  )
}

export default CartPage;