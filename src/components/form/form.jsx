import React, { useState } from "react";
import Name from "./name/name";
import LastName from "./lastName/lastName";
import PhoneNumber from "./phoneNumber/phoneNumber";
import Reletive from "./reletive/reletive";
import Email from "./email/email";
import Button from "./button/button";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    reletive: "",
    email: "",
  });
  const [error, setError] = useState({});
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError((prev) => ({ ...prev, [field]: "" })); // حذف خطا هنگام تایپ
  };

  const fieldNames = {
    name: "نام",
    lastName: "نام خانوادگی",
    phoneNumber: "شماره تلفن",
    reletive: "نسبت",
    email: "ایمیل"
  };
  const handleSubmit = () => {
    let newErrors = {};
    const fieldNames = {
      name: "نام",
      lastName: "نام خانوادگی",
      phoneNumber: "شماره تلفن",
      reletive: "نسبت",
      email: "ایمیل"
    };
    // بررسی خالی بودن فیلدها
    Object.keys(form).forEach((field) => {
      if (!form[field]) {
        newErrors[field] = `لطفا ${fieldNames[field]} را پر کنید`;
      }
    });

    // اگر خطایی وجود داشته باشد، نمایش آن
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } 
  };

  return (
    <div>
      <Name value={form.name} error={error.name}/>
      <LastName value={form.lastName} error={error.lastName}/>
      <PhoneNumber value={form.phoneNumber} error={error.phoneNumber}/>
      <Reletive value={form.reletive} onChange={(val) => handleChange("reletive", val)} error={error.reletive}/>
      <Email value={form.email} error={error.email}/>
      <Button onClick={handleSubmit} />
    </div>
  );
}
