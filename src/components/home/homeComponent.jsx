import React, { useContext, useState } from "react";
import Cart from "../cart/cart";
import Header from "../header/hader";
import Form from "../form/form";
import { DarkModeContext } from "../context/DarkModeContext";
import Fetch from "../cart/fetch/fetch";

export default function HomeComponent() {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div  className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen`}>
      <Header />
      <div className="mt-8 mx-2 lg:flex lg:flex-row flex flex-col justify-center lg:justify-around gap-4 ">
        <div className="w-full lg:w-1/2">
          <h1 className="mb-4 text-center text-2xl font-bold">
            اضافه/ویرایش کاربران
          </h1>
          <div className="w-full p-8 shadow-lg border rounded">
            <Form  />
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-96">
          <h1 className="mb-4 text-center text-2xl font-bold">لیست کاربران</h1>
          <div className={`${darkMode ? "bg-gary-600 w-full h-96 p-2 rounded shadow-lg border" : "w-full h-96 p-2 rounded bg-gray-100 shadow-lg border"}`}>
            <Cart/>
            <Fetch/>
          </div>
        </div>
      </div>
    </div>
  );
}
