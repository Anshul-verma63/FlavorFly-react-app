import React from "react";
import { Link } from "react-router-dom";
import { setSearch } from "../redux/slices/SearchSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  console.log(useSelector((state) => state.search.search));
  return (
    <>
      <nav className=" flex flex-col lg:flex-row justify-between py-3 mx-6 mb-6">
        <div>
          <h3 className=" text-xl font-bold text-gray-600">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <h1 className="text-2xl font-bold">FlavorFly</h1>
          {/* <Link to={"/address"}>Address</Link> */}
        </div>
        <div>
          <input
            className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
            type="text"
            placeholder="Search here"
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
