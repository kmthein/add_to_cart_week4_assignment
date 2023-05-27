import React, { useContext } from "react";
import apple from "../apple.png";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import { itemContext } from "../store/itemContext";

const Cart = ({ showCartHandler }) => {
  const { cartItems, totalAmount, addItem, removeItem, deleteItem, completeOrder } = useContext(itemContext);

  return (
    <div className="flex items-center h-[100vh] fixed min-w-full">
      <div className="bg-white w-[60%] mx-auto rounded-md">
        <h4 className="pl-[25px] pt-5 text-2xl font-bold">
          Your Shopping Cart
        </h4>
        {cartItems.length < 1 ? (
          <div className="">
            <h2 className="text-center py-5">No items found in your cart</h2>
          </div>
        ) : (
          <div className="py-5">
            <table className>
              <tr className=" text-left">
                <th>Items</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
              <tbody className="text-[15px]">
                {cartItems.map((cartItem) => (
                  <tr className="cart-item">
                    <td>
                      <div className="flex items-center">
                        <img src={cartItem.img} className="w-[50px] mr-3" />
                        <span>{cartItem.name}</span>
                      </div>
                    </td>
                    <td>
                      <span>{cartItem.price} kyats</span>
                    </td>
                    <td>
                      <div className=" flex items-center">
                        <AiFillMinusCircle onClick={() => removeItem(cartItem.id)} className=" text-gray-700 text-[20px] cursor-pointer" />
                        <span className=" px-1">{cartItem.amount}</span>
                        <AiFillPlusCircle onClick={() => addItem({...cartItem, amount: 1})} className=" text-gray-700 text-[20px] cursor-pointer" />
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center">
                      <CiCircleRemove onClick={() => deleteItem(cartItem.id)} className=" mr-1 inline-block text-[23px] cursor-pointer " />
                      <span className="inline-block"> Remove</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mx-auto p-5">
          <hr />
          <div className="flex justify-between p-5">
            <h5>Total Price</h5>
            <h5>{totalAmount} kyats</h5>
          </div>
          <div className="mx-auto p-3 flex justify-end text-[15px]">
            <button
              className=" border-violet-700 border rounded-md py-1 px-2"
              onClick={showCartHandler}
            >
              Close
            </button>
            {cartItems.length < 1 ? (
              <></>
            ) : (
              <button className="ml-3 bg-violet-700 rounded-md py-1 px-2 text-white" onClick={() => {
                showCartHandler();
                alert("Your order is complete.")
                completeOrder();
              }}>
                Checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
