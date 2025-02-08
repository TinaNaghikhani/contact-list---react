import React, { useEffect, useState } from "react";
const regexName = /^[a-zA-Zآ-ی]{2,25}( [a-zA-Zآ-ی]{2,25})?$/;

export default function Name({ value, error }) {
  const [name, setName] = useState("");
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
    if (regexName.test(name)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name]);

  return (
    <div className="rtl flex flex-col text-right">
      <label className="font-semibold" htmlFor="input">
        نام:
      </label>
      <input
        value={value}
        onChange={(e) => setName(e.target.value)}
        className="focus:outline-none px-2 border-2 border-gray-100 shadow-lg m-2"
        type="text"
        placeholder="نام..."
      />
      {isValid && <p className="text-xs text-green-500">نام معتبر است</p>}
      {showError && <p className="text-xs text-red-500">{error}</p>}
      
    </div>
  );
}
