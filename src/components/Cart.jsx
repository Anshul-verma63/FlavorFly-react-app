import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CardItem from "./CardItem";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cardItems = useSelector((state) => state.cart.cart);
  const totalItem = cardItems.reduce((Qty, item) => Qty + item.quantity, 0);
  const totalPrice = cardItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white ${
          activeCart ? " translate-x-0" : " translate-x-full"
        } transition-all duration-500`}
      >
        <div className=" flex justify-between items-center my-3">
          <span>My Order</span>
          <IoMdClose
            onClick={() => {
              setActiveCart((prev) => !prev);
            }}
            className=" cursor-pointer border-2 border-gray-600 text-green-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300"
          />
        </div>
        {cardItems.map((item) => {
          return <CardItem key={item.id} food={item} />;
        })}

        <div className=" absolute bottom-0">
          <h3 className=" font-semibold text-gray-800">Items : {totalItem}</h3>
          <h3 className=" font-semibold text-gray-800">
            Total Amount : {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <Link to={"/success"}>
            <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5">
              Checkout
            </button>
          </Link>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => {
          setActiveCart((prev) => !prev);
        }}
        className={`fixed bottom-4 right-2 cursor-pointer rounded-full text-5xl shadow-md bg-white p-3 ${
          activeCart ? " opacity-0" : " opacity-1"
        } ${totalItem && " animate-bounce delay-500 transition-all"}`}
      />
    </>
  );
};

export default Cart;
