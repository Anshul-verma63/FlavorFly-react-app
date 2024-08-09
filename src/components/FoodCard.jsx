import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ food, notify }) => {
  const dispatch = useDispatch();
  return (
    <div className="ml-6 my-3 font-bold w-[200px] bg-white p-4 flex flex-col rounded-lg gap-2">
      <img
        src={food.img}
        alt="food-img"
        className="rounded-lg w-auto h-[120px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div>
        <h2>
          {food.name.length >= 20
            ? `${food.name.slice(0, 15)}...`
            : `${food.name.slice(0, 15)}`}
        </h2>
        <span>₹{food.price}</span>
      </div>

      <p className="text-sm font-normal">{food.desc.slice(0, 40)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">{food.rating}</span>
        <button
          onClick={() => {
            dispatch(
              addToCart({
                id: food.id,
                name: food.name,
                price: food.price,
                quantity: 1,
                rating: food.rating,
                img: food.img,
              })
            );
            notify(`${food.name} Addedd!`);
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to card
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
