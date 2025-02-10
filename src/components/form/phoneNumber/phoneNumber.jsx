import React, { useEffect, useState } from "react";
const numberRegex = /^0\d{10}$/;

export default function PhoneNumber({ value, error, onChange }) {
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (numberRegex.test(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [value]);

  useEffect(() => {
    if (error) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [error]);

    // وقتی مقدار تغییر کرد، مقدار را در state داخلی و Form ذخیره کن
    const handleChange = (e) => {
      const newValue = e.target.value;
      setNumber(newValue);
      onChange(newValue); // مقدار جدید را به Form.jsx ارسال می‌کند
    };
  return (
    <div className="rtl flex flex-col text-right">
      <label className="font-semibold" htmlFor="phoneNumber">
        شماره تلفن:
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="focus:outline-none px-2 border-2 border-gray-100 shadow-lg m-2"
        type="text"
        id="phoneNumber"
        placeholder="شماره تلفن..."
      />
      {isValid && <p className="text-xs text-green-500">شماره تلفن معتبراست</p>}
      {showError && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
