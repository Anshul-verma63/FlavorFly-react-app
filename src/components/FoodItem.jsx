import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../FoodData/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const selectedCategory = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const notify = (sms) => toast.success(sms);

  return (
    <div className="flex flex-wrap gap-5 justify-center items-center lg:justify-start ml-0">
      {FoodData.filter((item) => {
        if (selectedCategory == "All") {
          return item.name
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase());
        } else {
          return (
            item.category == selectedCategory &&
            item.name.toLowerCase().includes(search.toLowerCase())
          );
        }
      }).map((food) => {
        return <FoodCard key={food.id} food={food} notify={notify} />;
      })}
      <Toaster />
    </div>
  );
};

export default FoodItem;

// FoodData.map((food) => {
//   return <FoodCard key={food.id} food={food} notify={notify} />;
// })
