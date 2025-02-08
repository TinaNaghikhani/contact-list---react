import React from "react";

export default function Reletive({ value, onChange, error }) {
  
  return (
    <div className="rtl flex flex-col text-right">
      <label className="font-semibold" htmlFor="reletive">
        نسبت:
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="focus:outline-none px-2 border-2 border-gray-100 shadow-lg m-2"
        type="text"
        placeholder="نسبت"
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
      
    </div>
  );
}
