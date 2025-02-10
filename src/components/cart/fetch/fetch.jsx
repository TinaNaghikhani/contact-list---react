import React, { useEffect, useState } from "react";
import Cart from "../cart";

export default function Fetch() {
  const [data, setData] = useState([]);
  const [isLoding, setIsLoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://676ac00c863eaa5ac0df824c.mockapi.io/tinatodolist/contacts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("خطا در دریافت اطلاعات!");
        }
        return response.json();
      })
      .then((data) => {
        
        setData(data || []);
        setIsLoding(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoding(false);
      });
  }, []);

  if (isLoding)
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg ">
          <p>درحال بارگذاری ...</p>
        </div>
      </div>
    );
  if (error) return <p>خطا: {error}</p>;

  return <div>
    <Cart data={data} setData={setData}/>
  </div>;
}
