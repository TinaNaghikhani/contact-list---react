import React, { useContext, useState } from "react";
import Buttons from "./buttons/buttons";
import DeleteModal from "./buttons/modals/deleteModal";
import EditModal from "./buttons/modals/editModal";
import { DarkModeContext } from '../context/DarkModeContext';

export default function Cart() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // وضعیت مودال
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const openDeleteModal = () => setIsDeleteModalOpen(true); // باز کردن مودال
  const closeDeleteModal = () => setIsDeleteModalOpen(false); // بستن مودال
  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditeModal = () => setIsEditModalOpen(false);

  return (
    <div  className="flex gap-10 ">
      <div className={`${darkMode ? "bg-gray-800 text-white w-1/2 rounded p-2 shadow-xl" : "w-1/2 rounded bg-gray-300 p-2 shadow-xl"}`} >
        <p className="font-semibold">نام:محمد محدی</p>
        <p className="font-semibold">شماره موبایل:09039738895</p>
        <p className="font-semibold">نسبت:دوست</p>
        <p className="font-semibold">ایمیل:tinankh1@gmail.com</p>
        <Buttons onDelete={openDeleteModal} onEdit={openEditModal}/>
      </div>
      <DeleteModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} />
      <EditModal isopen={isEditModalOpen} onClose={closeEditeModal}/>
    </div>
  );
}
