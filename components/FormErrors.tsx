import React from "react";

interface Props {
  errors: {
    [key: string]: object;
  };
}

const FormErrors = ({ errors }: Props) => {
  return (
    <div className="flex flex-col p-5">
      {errors.name && (
        <span className="text-red-500">- The Name Field is required</span>
      )}
      {errors.comment && (
        <span className="text-red-500">- The Comment Field is required</span>
      )}
      {errors.email && (
        <span className="text-red-500">- The Email Field is required</span>
      )}
    </div>
  );
};

export default FormErrors;
