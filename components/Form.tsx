import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Post } from "../typings";
import FormErrors from "./FormErrors";
import FormField from "./FormField";

interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

interface Props {
  post: Post;
}

const Form = ({ post }: Props) => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error(err);
        setSubmitted(false);
      });
  };

  return (
    <>
      {submitted ? (
        <div className="flex flex-col p-10 my-10 bg-yellow-500 text-white max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold">
            Thank you for submitting your comment!
          </h3>
          <p>Once it has been approved, it will appear below!</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
        >
          <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
          <h4 className="text-3xl font-bold">Leave a comment below!</h4>
          <hr className="py-3 mt-2" />

          <input
            {...register("_id")}
            type="hidden"
            name="id"
            value={post._id}
          />

          <FormField
            {...register("name", { required: true })}
            label="Name"
            placeholder="Yegor Golovach"
          />

          <FormField
            {...register("email", { required: true })}
            label="Email"
            type="email"
            placeholder="yegor.golovach@mail.com"
          />

          <FormField
            {...register("comment", { required: true })}
            label="Comment"
            textarea
            placeholder="Type your comment here..."
          />

          <FormErrors errors={errors} />

          <input
            type="submit"
            className="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-4 rounded cursor-pointer"
          />
        </form>
      )}
    </>
  );
};

export default Form;
