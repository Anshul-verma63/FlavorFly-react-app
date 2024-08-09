import React, { useEffect, useState } from "react";
import foodData from "../FoodData/FoodData.js";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice.jsx";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const selectedCategory = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  const getUniqueCategory = () => {
    const uniqueCategory = [...new Set(foodData.map((item) => item.category))];
    setCategories(uniqueCategory);
  };

  useEffect(() => {
    getUniqueCategory();
  }, []);
  return (
    <div className="ml-6">
      <h3 className=" text-xl font-semibold">Find the best food</h3>
      <div className=" flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-1 rounded-lg ${
            selectedCategory === "All" ? " bg-blue-600 text-white" : " bg-white"
          }`}
        >
          All
        </button>
        {categories.map((cat, i) => {
          return (
            <button
              onClick={() => dispatch(setCategory(cat))}
              key={i}
              className={`px-3 py-1 rounded-lg ${
                selectedCategory === cat
                  ? " bg-blue-600 text-white"
                  : " bg-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
