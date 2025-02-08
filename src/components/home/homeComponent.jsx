import React from "react";
import Cart from "../cart/cart";
import Header from "../header/hader";
import Form from "../form/form";

export default function HomeComponent() {
  return (
    <div>
      <Header />
      <div className="mt-8 mx-2 flex justify-around gap-4 ">
        <div className="w-1/2">
          <h1 className="mb-4 text-center text-2xl font-bold">
            اضافه/ویرایش کاربران
          </h1>
          <div className="w-full p-8 shadow-lg border rounded">
            <Form />
          </div>
        </div>

        <div className="w-1/2 h-96">
          <h1 className="mb-4 text-center text-2xl font-bold">لیست کاربران</h1>
          <div className="w-full h-96 p-2 rounded bg-gray-100 shadow-lg border">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}
