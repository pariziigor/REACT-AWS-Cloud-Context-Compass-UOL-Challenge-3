'use client'
import { useState } from "react";

export default function FormCheckBox() {
  const [check, setCheck] = useState(false);

  const changeCheck = () => {
    setCheck((prevState) => !prevState);
  };

  return (
    <>
      <label className="py-2 flex items-center w-full gap-1 text-[#868686] text-sm">
        <div className="w-3.5 h-3.5 mr-2 rounded border-[1px] grid place-items-center border-dark-20">
          <div
            className={`w-2.5 h-2.5 bg-brand-color rounded-sm ${!check ? "hidden" : ""
              }`}
          ></div>
        </div>
        <input onClick={changeCheck} type="checkbox" className="hidden" />
        Lembrar minha senha
      </label>
    </>
  );
}