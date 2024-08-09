import React from "react";
import img from "../assets/food.jpg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increamentQuant,
  decreamentQuant,
} from "../redux/slices/CartSlice.jsx";

const CardItem = ({ food }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={() => dispatch(removeFromCart(food))}
        className=" absolute right-7 text-gray-600 cursor-pointer mb-2"
      />
      <img
        src={food.img}
        alt="food-img"
        className="w-[50px] h-[50px] rounded-3xl"
      />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{food.name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹{food.price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-6">
            <AiOutlinePlus
              onClick={() => dispatch(increamentQuant(food))}
              className=" border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{food.quantity}</span>
            <AiOutlineMinus
              onClick={() => {
                if (food.quantity > 1) {
                  dispatch(decreamentQuant(food));
                }
              }}
              className=" border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
