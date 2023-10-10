import { motion } from "framer-motion";

export default function CustomInput({
  id,
  type,
  label,
  register,
  errors,
}) {
  return (
    <motion.div
      layout="position"
      className={`${
        type === "textarea" ? "col-span-2" : "col-auto"
      } flex flex-col gap-2 w-full`}
    >
      
      {type === "textarea" ? (
        <textarea
          {...register(id, {
            required: `${label} is required`,
          })}
          rows={6}
          placeholder={label}
          id={id}
          className={`outline-0 rounded-md p-4 border bg-white/5 backdrop-blur-lg placeholder:font-normal placeholder:capitalize border-white/20 `}
          type={type}
        />
      ) : (
        <input
          {...register(id, {
            required: `${label} is required`,
          })}
          placeholder={label}
          id={id}
          className={`outline-0 rounded-md p-4 border bg-white/5 backdrop-blur-lg placeholder:font-normal placeholder:capitalize border-white/20`}
          type={type}
        />
      )}
      {errors?.[id]?.message && (
        <motion.span
          layout="position"
          initial={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-left text-red-500"
        >
          {errors?.[id]?.message}
        </motion.span>
      )}
    </motion.div>
  );
}
