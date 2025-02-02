import { useState, useReducer } from "react";
import { CartContext } from "./CartContext";
import { DUMMY_PRODUCTS } from "../dummy-products";

//ADD REDUCER WITH USEREDUCER

function cartReducer(state, action) {
  if (action.type === "ADD") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  if (action.type === "UPDATE") {
    
      const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
      };
    
  }

  return state;
}
export default function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });
  // const [shoppingCart, setShoppingCart] = useState({
  //   items: [],
  // });
  function handleAddItemToCart(id) {
    dispatchCartAction({ type: "ADD", 
      payload: id });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    dispatchCartAction({ type: "UPDATE",payload:{
      productId: productId, amount: amount 
    } });

  }

  const value = {
    cart: cartState,
    onAddItemToCart: handleAddItemToCart,
    onUpdateCartItemQuantity: handleUpdateCartItemQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
