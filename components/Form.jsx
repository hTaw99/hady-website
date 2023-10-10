"use client";
import { useForm } from "react-hook-form";
// import useFormPersist from "react-hook-form-persist";
import CustomInput from "./ui/CustomInput";
import { motion } from "framer-motion";

export default function Form({ isHome }) {
  const inputs = [
    {
      label: "first name",
      id: "firstName",
      type: "text",
    },
    {
      label: "last name",
      id: "lastName",
      type: "text",
    },
    {
      label: "email",
      id: "email",
      type: "email",
    },
    // {
    //   label: "عنوان المقترح",
    //   id: "title",
    //   type: "text",
    // },

    {
      label: "message",
      id: "message",
      type: "textarea",
    },
  ];

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  // useFormPersist("complainForm", { watch, setValue });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] sm:w-[500px]">
      <div className=" flex flex-col gap-4 mb-4">
        {inputs.map((input) => (
          <CustomInput
            isHome={isHome}
            key={input.id}
            register={register}
            errors={errors}
            {...input}
          />
        ))}
      </div>
      <motion.button
        layout="position"
        className="px-6 py-2 bg-[radial-gradient(100%_150%_at_7.3%_-29.1%,#C485FF_0%,#7700FF_100%)] font-semibold text-white rounded-full capitalize"
        type="submit"
      >
        submit
      </motion.button>
    </form>
  );
}
