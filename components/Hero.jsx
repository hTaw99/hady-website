"use client";
import Logo from "@/icons/Logo";
import { useEffect, useRef } from "react";
import Button from "./ui/Button";
import DescriptionText from "./ui/DescriptionText";
import { HiOutlineDownload } from "react-icons/hi";

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
      <div className="absolute -z-30 top-1/2 -translate-y-1/2  opacity-50 // w-[784px] h-[364px]">
        <div className="absolute w-[478px] top-0  -right-[53px] -bottom-[36px] ">
          <div className="absolute inset-0 bg-[radial-gradient(57.599999999999994%_57.59999999999999%_at_24.9%_48.1%,#a200ff_0%,rgba(132,0,255,0)_100%)] blur-[10px] rounded-[196px]" />
          <div className="absolute top-0 left-0 w-[170px] h-[338px] bg-[radial-gradient(82.1%_58.099999999999994%_at_32.9%_48.699999999999996%,#d952ff_0%,rgba(132,0,255,0)_100%)] blur-[10px] rounded-[196px]" />
        </div>
        <div className="absolute w-[604px] -top-[102px] -left-[178px] -bottom-[80px]">
          <div className=" absolute w-[522px] rotate-[12deg] h-[446px] left-[calc(50%-522px/2)] top-[calc(50%-446px/2)]  bg-[radial-gradient(61.7%_61.69999999999999%_at_95.1%_35.8%,#1482ff_0%,rgba(170,0,255,0)_100%)] blur-[10px] rounded-[196px]" />
          <div className="absolute w-[248px] -rotate-[3deg] h-[356px] left-[322px] top-[calc(47.1%-356px/2)]  bg-[radial-gradient(61.7%_61.69999999999999%_at_95.1%_35.8%,#14adff_0%,rgba(170,0,255,0)_100%)]  blur-[10px] rounded-[196px]" />
        </div>
      </div>

      <div className="text-center flex flex-col items-center z-10 ">
        <div className="p-6 gradient-primary mb-8 mx-auto w-24 h-24 md:w-32 md:h-32 rounded-3xl flex justify-center  items-center">
          <Logo className="w-full h-full" />
        </div>
        <h1 className="mb-4 md:mb-6 bg-clip-text text-transparent gradient-gray">
          I&apos;m Hady <br /> Tawfik
        </h1>
        <p className="mb-8 max-w-[50ch] px-4 sm:px-0">
          I&apos;am a Full Stack Developer, specializing in web applications and
          interfaces using JavaScript frameworks and libraries
        </p>

        {/* <button className="bg-gradient-to-r from-red-700  to-red-500 py-2 px-6 rounded-full capitalize text-lg font-semibold">
          contact me
        </button> */}

        {/* ############### buttons ############ */}
        <div className="flex gap-2">
          <Button link="/contact" className="btn-primary">
            contact me
          </Button>
          <Button className="btn-secondary flex justify-center items-center gap-2">
            resume <HiOutlineDownload size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
}
