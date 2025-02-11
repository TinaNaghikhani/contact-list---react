import React, { useContext } from "react";
import background from "../../assets/mobile1.jpg";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div
        className="m-0 rounded-b-full py-1 pl-10 pr-5 flex justify-between md:mx-2 md:rounded-b-full md:py-3 md:pl-20 md:pr-10 md:flex md:justify-between"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h2 className="font-semibold text-white md:text-white md:text-center md:font-bold md:text-2xl">
          وب اپلیکیشن مدیریت مخاطبین
        </h2>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdOutlineLightMode className="text-yellow-500 w-8 h-8" />
          ) : (
            <MdOutlineDarkMode className="text-white w-8 h-8" />
          )}
        </button>
      </div>
    </div>
  );
}
