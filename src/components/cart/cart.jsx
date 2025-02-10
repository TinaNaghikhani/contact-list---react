import React, { useContext, useState } from "react";
import Buttons from "./buttons/buttons";
import DeleteModal from "./buttons/modals/deleteModal";
import EditModal from "./buttons/modals/editModal";
import { DarkModeContext } from '../context/DarkModeContext';

export default function Cart({ data = [], setData }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // وضعیت مودال
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
const [selectedId , setSelectedId] = useState(null)

  const openDeleteModal = () => setIsDeleteModalOpen(true); // باز کردن مودال
  const closeDeleteModal = () => setIsDeleteModalOpen(false); // بستن مودال
  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditeModal = () => setIsEditModalOpen(false);


  const handleDelete = () => {
    const newData = data.filter((item) => item.id !== selectedId);
    setData(newData); // حذف مخاطب از لیست
    closeDeleteModal();
  };
  return (
    <div className="grid grid-cols-2 gap-10">
      {data.map((item) => (
        <div
          key={item.id}
          className={`${darkMode ? "w-full bg-gray-800 text-white" : "w-full bg-gray-300"} w-1/2 rounded p-2 shadow-xl`}
        >
          <p className="font-semibold">نام: {item.name} {item.lastName}</p>
          <p className="font-semibold">شماره موبایل: {item.phoneNumber}</p>
          <p className="font-semibold">نسبت: {item.reletive}</p>
          <p className="font-semibold">ایمیل: {item.email}</p>
          <Buttons onDelete={openDeleteModal} onEdit={openEditModal} />
        </div>
      ))}
      <DeleteModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} onConfirm={handleDelete}/>
      <EditModal isopen={isEditModalOpen} onClose={closeEditeModal}/>
    </div>
  );
}
