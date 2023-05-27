import React, { useContext, useState } from "react";
import Backdrop from "./Backdrop";
import Navbar from "./Navbar";
import Product from "./Product";
import { itemContext } from "../store/itemContext";

const Main = () => {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(!showCart);
    }

  return (
    <div>
      {showCart && <Backdrop showCartHandler={showCartHandler} />}
      <div className="w-[70%] mx-auto" >
        <Navbar showCartHandler={showCartHandler} />
        <Product />
      </div>
    </div>
  );
};

export default Main;
