import React from "react";
import Cart from "../component/Cart";

const Backdrop = ({ showCartHandler }) => {
  return (
    <>
      <div className="w-full backdrop">
      <Cart showCartHandler={showCartHandler} />
      </div>
    </>
  );
};

export default Backdrop;
