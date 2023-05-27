import { createContext, useReducer } from "react";

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

export const itemContext = createContext({
  cartItems: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  deleteItem: (id) => {},
  completeOrder: () => {}
});

const itemReducer = (state, action) => {
  if (action.type == "ADD_ITEM") {
    const updatedTotalAmount =
    state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.cartItems.findIndex((item => item.id === action.item.id));
    const existingItem = state.cartItems[existingItemIndex];

    let updatedItems;
    if(existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount
      }
      updatedItems = [...state.cartItems];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.cartItems.concat(action.item);
    }

    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if(action.type == "REMOVE_ITEM") {
    const existingItemIndex = state.cartItems.findIndex(item => item.id === action.id);
    const existingItem = state.cartItems[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if(existingItem.amount === 1) {
      updatedItems = state.cartItems.filter((item) => item.id != action.id);
    } else {
      const updatedItem =  {...existingItem, amount: existingItem.amount - 1};
      updatedItems = [...state.cartItems];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if(action.type === "DELETE_ITEM") {
    let updatedItems;
    updatedItems = state.cartItems.filter((item) => item.id !== action.id);
    const existingItemIndex = state.cartItems.findIndex(item => item.id === action.id);
    const existingItem = state.cartItems[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if(action.type === "COMPLETE_ORDER") {
    state.cartItems = [];
    state.totalAmount = 0;
  }

  return initialState;
};

const ItemContextProvider = (props) => {
  const [itemState, dispatchItem] = useReducer(itemReducer, initialState);

  const addItemHandler = (item) => {
    dispatchItem({ type: "ADD_ITEM", item });
  };

  const removeItemHandler = (id) => {
    dispatchItem({ type: "REMOVE_ITEM", id });
  };

  const deleteItemHandler = (id) => {
    dispatchItem({ type: "DELETE_ITEM", id })
  }

  const completeOrderHandler = () => {
    dispatchItem({ type: "COMPLETE_ORDER" })
  }

  const itemCtx = {
    cartItems: itemState.cartItems,
    totalAmount: itemState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    deleteItem: deleteItemHandler,
    completeOrder: completeOrderHandler
  };

  return (
    <itemContext.Provider value={itemCtx}>
      {props.children}
    </itemContext.Provider>
  );
};

export default ItemContextProvider;
