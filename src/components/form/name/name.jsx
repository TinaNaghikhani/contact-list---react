import React, { useEffect, useState } from "react";
const regexName = /^[a-zA-Zآ-ی]{2,25}( [a-zA-Zآ-ی]{2,25})?$/;

export default function Name({ value, error,onChange }) {
  const [isValid, setIsValid] = useState(false);
  const [showError,setShowError]=useState(false);

  useEffect(() => {
    if (error) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [error]);

  useEffect(() => {
    // اعتبارسنجی مقدار ورودی در هنگام تغییر
    if (regexName.test(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [value]); // وقتی مقدار ورودی تغییر کند، اعتبارسنجی انجام می‌شود

  return (
    <div className="rtl flex flex-col text-right">
      <label className="font-semibold" htmlFor="name">
        نام:
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}

        className="focus:outline-none px-2 border-2 border-gray-100 shadow-lg m-2"
        type="text"
        id="name"
        placeholder="نام..."
      />
      {isValid && <p className="text-xs text-green-500">نام معتبر است</p>}
      {showError && <p className="text-xs text-red-500">{error}</p>}
      
    </div>
  );
}
