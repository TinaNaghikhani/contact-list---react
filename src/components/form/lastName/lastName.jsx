import React, { useEffect, useState } from "react";
const regexLname = /^[a-zA-Zآ-ی]{2,30}( [a-zA-Zآ-ی]{2,30})*$/;

export default function LastName({ value, error }) {
  const [lastName, setLastName] = useState("");
  const [isValid, setIsValid] = useState(false);
const [showError , setShowError] = useState(false);

useEffect(() => {
  if (error) {
    setShowError(true);
  } else {
    setShowError(false);
  }
}, [error]);

  useEffect(() => {
    if (regexLname.test(lastName)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [lastName]);

  return (
    <div className="rtl flex flex-col text-right">
      <label className="font-semibold" htmlFor="input">
        نام خانوادگی:
      </label>
      <input
        value={value}
        onChange={(e) => setLastName(e.target.value)}
        className="focus:outline-none px-2 border-2 border-gray-100 shadow-lg m-2"
        type="text"
        placeholder="نام خانوادگی..."
      />
      {isValid && <p className="text-xs text-green-500">نام خانوادگی معتبر است</p>}
      {showError && <p className="text-xs text-red-500">{error}</p> }
      
    </div>
  );
}
