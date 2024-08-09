import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const OrderSuccess = () => {
  const [loader, setLoader] = useState(true);

  //set timeout
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      {loader ? (
        <div className=" flex items-center justify-center h-screen flex-col">
          <PropagateLoader color="blue" />
        </div>
      ) : (
        <div className=" flex items-center justify-center h-screen flex-col">
          <h1 className=" text-3xl mb-3 font-semibold">Order Succesful!</h1>

          <p>Your Order has been Placed Successfully!</p>
        </div>
      )}
    </>
  );
};

export default OrderSuccess;
                                      