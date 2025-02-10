import React from "react";

export default function DeleteModal({ isOpen, onClose, onConfirm}) {
  if (!isOpen) return null; // اگر مودال باز نیست، چیزی نمایش نمی‌دهیم

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg ">
        <div className="top-0 flex justify-between">
          <h2 className="text-black font-semibold">حذف کاربر</h2>
          <button className="text-black font-bold" onClick={onClose}>x</button>
        </div>
        <p className="m-8 text-black">از حذف کردن این مخاطب مطمئن هستید؟</p>
        <button onClick={onConfirm} className="rounded mx-1 px-1 bg-green-500 text-white font-bold">بله</button>
        <button onClick={onClose} className="rounded mx-1 px-1 bg-red-500 text-white font-bold">خیر</button>
      </div>
    </div>
  );
}
