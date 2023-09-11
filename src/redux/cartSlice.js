import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },

  reducers: {

    //////////Rdeducer - 1 - (Pour augmenter le compteur d'icon PANIER + Pour l'action " + " dans " - 1 + ") = INCREMENTATION.
    addItemToCart: (state, action) => {
      const item = action.payload;
      const exist = state.items.find(cartItem => cartItem.id === item.id);
      if (exist) 
      {
        return { 
          ...state,
          items: state.items.map(cartItem => {
            if (cartItem.id === exist.id) {
              return {
                ...cartItem,
                quantity: cartItem.quantity + 1 
              }
            }
            return cartItem;
          })
        }
      }
      return { 
        ...state,
        items: [...state.items, { ...item, quantity: 1 }]                                              
      }
    },

    //////////Rdeducer - 2 - (Pour l'action " - " dans " - 1 + ") = DECREMENTATION.
    removeItemFromCart: (state, action) => {
      const item = action.payload;
      const exist = state.items.find(cartItem => cartItem.id === item.id);
      if (exist.quantity === 1) {
        return {
          ...state,
          items: state.items.filter(cartItem => cartItem.id !== item.id) 
        }
      }
      return { 
        ...state,
        items: state.items.map(cartItem => {
          if (cartItem.id === exist.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1 //Le -1 de décrementation avec la flèche ( - ) dans (- 1 +)
            }
          }
          return cartItem;
        })
      }
    },

    //////////Rdeducer - 3 - (Pour l'action " x ") = DELETE.
    clearCartItem: (state, action) => {
      return {
        ...state,
        items: state.items.filter(cartItem => cartItem.id !== action.payload.id) 
      }
    },

    //////////Rdeducer - 4 - (Quand on clique sur le Button [Clear Cart]).
    clearCart: (state) => {
      return {
        ...state,
        items: []
      }
    },

    //////////Rdeducer - 5 - (le "action.payload" = cliquer sur le Button [Add tio cart])
    setCartItems: (state, action) => {  
      return {
        ...state,
        items: action.payload
      }
    }
  }
});


export const CART_SLICE_ACTIONS = cartSlice.actions;

export default cartSlice.reducer;