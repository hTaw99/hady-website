import NextIcon from "@/icons/NextIcon";
import ReactIcon from "@/icons/ReactIcon";
import FigmaIcon from "@/icons/FigmaIcon";
import React from "react";
import NestIcon from "@/icons/NestIcon";
import ReduxIcon from "@/icons/ReduxIcon";
import Button from "./ui/Button";

export default function TechnologyStack() {
  const techs = [
    {},
    { icon: <ReactIcon /> },
    { icon: <NextIcon /> },
    { icon: <FigmaIcon /> },
    {},
    {},
    { icon: <NestIcon /> },
    { icon: <ReduxIcon /> },
    { icon: null },
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  return (
    <div className="flex container justify-center items-center min-h-[100vh]">
      <div className="grid md:grid-cols-2  w-[900px] gap-10 ">
        <div className="relative flex flex-col  p-10 before:inset-x-0 before:-top-0 before:bg-[radial-gradient(closest-side,rgba(255,255,255,0.3),transparent)] before:absolute before:h-[1.5px] rounded-xl bg-[rgba(255,255,255,0.02)] border border-white/10 min-h-[500px] ">
          <h4 className="capitalize text-left  text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gradient-color)] to-[var(--secondary-gradient-color)] via-[var(--tertiary-gradient-color)] mb-4  ">
            techonolgy stack
          </h4>
          <p className="text-white/50 text-left text-lg">
            Building and transforming digital products with a range of
            technologies.
          </p>
          <Button className="btn-tertiary   mt-auto">read more</Button>
        </div>
        <div className="p-10 flex flex-col gap-16 justify-between relative rounded-xl bg-[rgba(255,255,255,0.02)] border border-white/10 min-h-[500px]">
          <div
            style={{
              WebkitMaskBoxImage:
                "radial-gradient(circle at center, rgba(0,0,0) 10%,rgba(0,0,0,0) 80% )",
            }}
            className="w-full gap-2  md:gap-4 relative grid grid-cols-5"
          >
            {techs.map((el, i) => (
              <div
                key={i}
                className="hover:scale-105 w-full transition-all duration-300 flex justify-center items-center relative before:inset-x-0 before:-top-0 before:bg-[radial-gradient(closest-side,rgba(255,255,255,0.3),transparent)] before:absolute before:h-[1px] rounded-xl aspect-square bg-[rgba(255,255,255,0.03)] border border-white/10"
              >
                {el.icon}
              </div>
            ))}
          </div>
          <div className="mt-auto ">
            <h4 className="font-bold bg-clip-text text-transparent gradient-gray text-left mb-4">
              Never stop learning
            </h4>
            <p className="text-left text-lg text-white/50 ">
              Have passion to learn more technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
