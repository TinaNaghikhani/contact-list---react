import React, { useEffect, useState } from "react";
import { use } from "react";
const numberRegex = /^0\d{10}$/;

export default function PhoneNumber({ value, error }) {
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (numberRegex.test(number)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [number]);
  useEffect(() => {
    if (error) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [error]);
  return (
    <div className="rtl flex flex-col text-right">
      <label className="font-semibold" htmlFor="input">
        شماره تلفن:
      </label>
      <input
        value={value}
        onChange={(e) => setNumber(e.target.value)}
        className="focus:outline-none px-2 border-2 border-gray-100 shadow-lg m-2"
        type="text"
        placeholder="شماره تلفن..."
      />
      {isValid && <p className="text-xs text-green-500">شماره تلفن معتبراست</p>}
      {showError && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
