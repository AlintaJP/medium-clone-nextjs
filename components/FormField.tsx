import React from "react";

interface Props {
  placeholder: string;
  type?: string;
  label: string;
  textarea?: boolean;
}

const FormField = ({ placeholder, type, label, textarea }: Props) => {
  const className = `shadow border rounded py-2 px-3 ${
    textarea ? "form-textarea" : "form-input"
  } mt-1 block w-full ring-yellow-500 outline-none focus:ring`;

  return (
    <label className="block mb-5">
      <span className="text-gray-700">{label}</span>
      {textarea ? (
        <textarea className={className} rows={8} placeholder={placeholder} />
      ) : (
        <input
          className={className}
          type={type || "text"}
          placeholder={placeholder}
        />
      )}
    </label>
  );
};

export default FormField;
