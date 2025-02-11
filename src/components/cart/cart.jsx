import React, { useContext, useState } from "react";
import Buttons from "./buttons/buttons";
import DeleteModal from "./buttons/modals/deleteModal";
import EditModal from "./buttons/modals/editModal";
import { DarkModeContext } from "../context/DarkModeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Cart({ data = [], setData }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
  const [selectedId, setSelectedId] = useState(null);

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => setIsDeleteModalOpen(false);
  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const handleDelete = () => {
    const newData = data.filter((item) => item.id !== selectedId);
    setData(newData);
    closeDeleteModal();
  };

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {Array.from({ length: Math.ceil(data.length / 4) }, (_, index) => (
        <SwiperSlide key={index}>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 ">
            {data.slice(index * 4, index * 4 + 4).map((item) => (
              <div
                key={item.id}
                className={`${
                  darkMode ? "bg-gray-800 text-white" : "bg-gray-300"
                } rounded p-2 shadow-xl`}
              >
                <p className="font-semibold">
                  نام: {item.name} {item.lastName}
                </p>
                <p className="font-semibold">شماره موبایل: {item.phoneNumber}</p>
                <p className="font-semibold">نسبت: {item.reletive}</p>
                <p className="font-semibold">ایمیل: {item.email}</p>
                <Buttons onDelete={() => openDeleteModal(item.id)} onEdit={openEditModal} />
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onDelete={handleDelete}
      />
      <EditModal isOpen={isEditModalOpen} onClose={closeEditModal} />
    </Swiper>
  );
}
