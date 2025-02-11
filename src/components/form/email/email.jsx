import React, { useState, useEffect } from "react";
const regex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
export default function Email({ value, error, onChange }) {
  const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (error) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [error]);

  useEffect(() => {
    if (regex.test(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [value]);

  return (
    <div className="rtl flex flex-col text-right">
      <label className="font-semibold" htmlFor="email">
        ایمیل:
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="focus:outline-none px-2 border-2 border-gray-100 shadow-lg m-2"
        type="email"
        id="email"
        placeholder="ایمیل..."
      />
      {isValid && <p className="text-xs text-green-500">ایمیل معتبر است</p>}
      {showError && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
