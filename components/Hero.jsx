"use client";
import Logo from "@/icons/Logo";
import { useEffect, useRef } from "react";
import Button from "./ui/Button";
import DescriptionText from "./ui/DescriptionText";

export default function Hero() {
  const bgRef = useRef();
  useEffect(() => {
    const updateMousePosition = (event) => {
      if (!bgRef.current) return;
      const { clientX, clientY } = event;
      bgRef.current.style.setProperty("--y", `${clientY}px`);
      bgRef.current.style.setProperty("--x", `${clientX}px`);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    // <section
    //   ref={bgRef}
    //   className="h-screen z-20 text-white  flex justify-center items-center  before:inset-0 before:absolute relative before:bg-[radial-gradient(circle_closest-corner_at_var(--x,500px)_var(--y,500px),_#230202_0%,_transparent_100%)]"
    // >
    <section
      ref={bgRef}
      className="min-h-screen  overflow-hidden  relative z-20 text-white  flex justify-center items-center bg-[radial-gradient(51%_49%_at_50%_50%,#1a0740_0%,var(--background-color)_100%)]"
    >
      {/* ############### Gradient ################ */}
      <div className="absolute  -z-30 -rotate-90  flex top-[70%] -translate-y-1/2 opacity-40">
        <div className=" w-[700px] h-[500px] ">
          <div className="absolute right-0 w-full h-full bg-[radial-gradient(61%_61%_at_95%_35%,#1482ff_0%,rgba(170,0,255,0)_100%)] blur-2xl rounded-[196px]" />
          <div className="absolute right-0 w-full h-1/2 bg-[radial-gradient(61%_61%_at_95%_35%,#14adff_0%,rgba(170,0,255,0)_100%)] blur-2xl rounded-[196px]" />
        </div>
        <div className="w-96 h-96">
          <div className=" absolute right-0 w-1/3 h-full bg-[radial-gradient(circle_at_24%_48%,#a200ff_0%,rgba(132,0,255,0)_100%)] blur-2xl rounded-[196px]" />
          <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-[radial-gradient(82%_58%_at_32.9%_48%,#d952ff_0%,rgba(132,0,255,0)_100%)]  blur-2xl rounded-[196px]" />
        </div>
      </div>

      <div className="text-center flex flex-col items-center z-10 ">
        <div className="p-6 bg-[radial-gradient(100%_150%_at_7.3%_-29.1%,#C485FF_0%,#7700FF_100%)] mb-8 mx-auto w-24 h-24 md:w-32 md:h-32 rounded-3xl flex justify-center  items-center">
          <Logo className="w-full h-full" />
        </div>
        <h1 className="mb-4 md:mb-6 bg-clip-text text-transparent bg-[radial-gradient(circle_at_center,#ffffff,rgba(150,150,150))]">
          I&apos;m Hady <br /> Tawfik
        </h1>
        <p className="mb-8 max-w-[50ch] px-4 sm:px-0">
          I&apos;a self taught Product Designer based out of Egypt.
          Sometimes I dabble with code, video games or the piano.
        </p>

        {/* <button className="bg-gradient-to-r from-red-700  to-red-500 py-2 px-6 rounded-full capitalize text-lg font-semibold">
          contact me
        </button> */}

        {/* ############### buttons ############ */}
        <div className="flex gap-4">
          <Button link="/contact" className="btn-primary">
            contact me
          </Button>
          <Button className="btn-secondary">resume</Button>
        </div>
      </div>
    </section>
  );
}
