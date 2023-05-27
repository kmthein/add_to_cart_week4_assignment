import React, { useContext, useState } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { itemContext } from "../store/itemContext";

const Card = ({ id, name, price, img }) => {
  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNum = +currentAmount;

  const itemCtx = useContext(itemContext);

  const addToCartHandler = () => {
    if(currentAmountNum < 1 || currentAmountNum > 5) {
      alert("Please enter a valid amount!!!")
      return;
    }
    itemCtx.addItem({
      id,
      name,
      price,
      img,
      amount: currentAmountNum
    })
  }
  return (
    <div className="card w-[200px] my-5" key={id}>
      <div className="card-img my-5 h-[150px]">
        <img src={img} className="max-w-[150px] mx-auto" />
      </div>
      <div className="card-body text-center">
        <h5 className="font-semibold">{name}</h5>
        <p className="text-sm">{price} kyats</p>
        <div className="flex justify-center py-4">
          <div className=" flex items-center justify-between">
            <input type="number" value={currentAmountNum} min={1} max={5} onChange={(e) => setCurrentAmount(e.target.value)} className="w-[40px] pl-2 border mr-2 text-sm" />
            <button className="bg-black/70 text-white px-3 text-sm py-[2px] rounded-sm" onClick={addToCartHandler}>+ Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
