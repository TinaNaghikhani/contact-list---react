import React from "react";
import Form from "../../../form/form";

export default function EditModal({ isopen, onClose }) {
  if (!isopen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white py-4 px-10 rounded-lg ">
                  <div className="top-0 flex justify-between">
        <h2 className="font-semibold">ویرایش کاربر</h2>
        <button className="font-bold" onClick={onClose}>
          x
        </button>
      </div>
      <Form />
      <button className="rounded mx-1 py-1 px-2 bg-green-500 text-white font-bold">
        ویرایش
      </button>
      <button onClick={onClose} className="rounded mx-1 py-1 px-2 bg-red-500 text-white font-bold">
        بستن
      </button>
        </div>

    </div>
  );
}
