import React, { useContext } from 'react'
import background from '../../assets/mobile1.jpg'
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { DarkModeContext } from '../context/DarkModeContext';


export default function Header() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode ? "bg-gray-900" : "bg-white"}`
    }>

    <div className='mx-2 rounded-b-full py-3 pl-20 pr-10 flex justify-between' style={{ backgroundImage: `url(${background})` }}>
      <h2 className='text-white text-center font-bold text-2xl'>وب اپلیکیشن مدیریت مخاطبین</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdOutlineLightMode className="text-yellow-500 w-8 h-8" />
          ) : (
            <MdOutlineDarkMode className="text-white w-8 h-8" />
          )}
        </button>
    </div>
    </div>
  )
}

