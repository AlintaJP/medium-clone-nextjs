import React from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";

interface Props {
  placeholder: string;
  type?: string;
  label: string;
  textarea?: boolean;
  register: UseFormRegisterReturn;
}

const FormField = ({ placeholder, type, label, textarea, register }: Props) => {
  const className = `shadow border rounded py-2 px-3 ${
    textarea ? "form-textarea" : "form-input"
  } mt-1 block w-full ring-yellow-500 outline-none focus:ring`;

  return (
    <label className="block mb-5">
      <span className="text-gray-700">{label}</span>
      {textarea ? (
        <textarea
          className={className}
          {...register}
          rows={8}
          placeholder={placeholder}
        />
      ) : (
        <input
          {...register}
          className={className}
          type={type || "text"}
          placeholder={placeholder}
        />
      )}
    </label>
  );
};

export default FormField;
