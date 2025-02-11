import React, { useEffect, useState } from "react";
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
  const [shouldSubmit, setShouldSubmit] = useState(false); // کنترل ارسال فرم
  const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const lnameRegex = /^[a-zA-Zآ-ی]{2,30}( [a-zA-Zآ-ی]{2,30})*$/;
  const nameRegex = /^[a-zA-Zآ-ی]{2,25}( [a-zA-Zآ-ی]{2,25})?$/;
  const numberRegex = /^0\d{10}$/;


  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError((prev) => ({ ...prev, [field]: "" })); // حذف خطا هنگام تایپ
  };

  const handleSubmit = () => {
    let newErrors = {};
    const fieldNames = {
      name: "نام",
      lastName: "نام خانوادگی",
      phoneNumber: "شماره تلفن",
      reletive: "نسبت",
      email: "ایمیل",
    };

    if (form.name && !nameRegex.test(form.name)) {
      newErrors.name = "ورودی معتبر نیست";
      setForm((prev) => ({ ...prev, name: "" })); // خالی کردن مقدار Name
    }

    if (form.lastName && !lnameRegex.test(form.lastName)) {
      newErrors.lastName = "ورودی معتبر نیست";
      setForm((prev) => ({ ...prev, lastName: "" })); // خالی کردن مقدار lastName
    }

    if (form.phoneNumber && !numberRegex.test(form.phoneNumber)) {
      newErrors.phoneNumber = "ورودی معتبر نیست";
      setForm((prev) => ({ ...prev, phoneNumber: "" })); // خالی کردن مقدار phoneNumber
    }

    if (form.email && !emailRegex.test(form.email)) {
      newErrors.email = "ورودی معتبر نیست";
      setForm((prev) => ({ ...prev, email: "" })); // خالی کردن مقدار ایمیل
    }

    // بررسی خالی بودن فیلدها
    Object.keys(form).forEach((field) => {
      if (!form[field]) {
        newErrors[field] = `لطفا ${fieldNames[field]} را پر کنید`;
      }
    });
    // ذخیره کردن خطاها
    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShouldSubmit(true); // ارسال فرم آغاز شود
    }
  };
  useEffect(() => {
    if (shouldSubmit) {
      const postData = async () => {
        try {
          await fetch(
            "https://676ac00c863eaa5ac0df824c.mockapi.io/tinatodolist/contacts",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(form),
            }
          );

          setForm({
            name: "",
            lastName: "",
            phoneNumber: "",
            reletive: "",
            email: "",
          }); 
          
          // ریست فرم
        } catch (error) {
          console.error("خطا در ارسال:", error)}
      };

      postData();
    }
  }, [shouldSubmit]);

  return (
    <div className="w-full">
      <Name
        value={form.name}
        onChange={(val) => handleChange("name", val)}
        error={error.name}
      />
      <LastName
        value={form.lastName}
        onChange={(val) => handleChange("lastName", val)}
        error={error.lastName}
      />
      <PhoneNumber
        value={form.phoneNumber}
        onChange={(val) => handleChange("phoneNumber", val)}
        error={error.phoneNumber}
      />
      <Reletive
        value={form.reletive}
        onChange={(val) => handleChange("reletive", val)}
        error={error.reletive}
      />
      <Email
        value={form.email}
        onChange={(val) => handleChange("email", val)}
        error={error.email}
      />
      <Button onClick={handleSubmit} />
    </div>
  );
}
