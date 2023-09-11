import React from 'react';
import { useDispatch } from 'react-redux';
import { CART_SLICE_ACTIONS } from '../../redux/cartSlice';

import './CartItem.css';

const CartItem = ({ cartItem}) => {

  const dispatch = useDispatch();
  const { quantity, inclTaxPrice, description, image } = cartItem;

  const handleIncrementCartItem = () => {
    dispatch(CART_SLICE_ACTIONS.addItemToCart(cartItem));
  }

  const handleDecrementCartItem = () => {
    dispatch(CART_SLICE_ACTIONS.removeItemFromCart(cartItem));
  }

  const handleRemoveCartItem = () => {
    dispatch(CART_SLICE_ACTIONS.clearCartItem(cartItem));
  }

  return (
    <div className="checkoutItemContainer">

      <div className="imageContainer">
        <img className="image" src={image} alt={`${description}`} />
      </div>

      <span className="smallWidth"> {description} </span>







      <span className="smallWidth quantity">
        <div className="arrow" onClick={handleDecrementCartItem}>
          &#x2d;
        </div>
        <span className='value'>{"( " + quantity + " )"}</span>
        <div className="arrow" onClick={handleIncrementCartItem}>
          &#x2b;
        </div>
      </span>











      <span className="smallWidth"> {inclTaxPrice.toFixed(2)}</span>



      

      <div className="removeButton" onClick={handleRemoveCartItem}>
        &#10005;
      </div>
      
    </div>
  )
}

export default CartItem;