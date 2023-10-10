import Form from "@/components/Form";
import React from "react";

export default function ContactPage() {
  return (
    <div className="text-center h-full  mx-auto flex flex-col justify-center items-center">
      <div className="absolute w-[500px] h-40 top-[23%] opacity-30">
        <div className=" absolute inset-y-0 left-16 bg-[radial-gradient(75%_75%_at_50%_50%,#1ba3ff_0%,hsl(194,100%,51%)_100%)] w-[500px]  rounded-full blur-[50px]" />
        <div className=" absolute inset-y-0 right-16 bg-[radial-gradient(75%_75%_at_50%_50%,#6600ff_0%,#5336ff_100%)] w-[500px] rounded-full blur-[100px]" />
      </div>
      <div className=" relative mb-16">
        <h1 className="font-bold text-5xl mb-4">Let&apos;s talk!</h1>
        <p className="text-white/50 text-lg">
          Got a project in mind? Fill in the form or send us a direct email.
        </p>
      </div>
      <Form />
    </div>
  );
}
