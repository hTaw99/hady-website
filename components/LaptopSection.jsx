import Lottie from "lottie-react";
import React, { useRef } from "react";
import laptop from "../icons/laptop.json";
import Link from "next/link";
import Button from "./ui/Button";

export default function LaptopSection() {
  const containerRef = useRef();
  const lottieRef = useRef();
  return (
    <div ref={containerRef} className="h-[300vh]">
      <div className="sticky top-0 overflow-hidden h-screen flex justify-center items-center">
        <div className="absolute h-60 w-60  md:w-[900px] md:h-80 top-[55%] opacity-60 -z-10">
          <div className=" absolute inset-y-0 left-16 bg-[radial-gradient(75%_75%_at_50%_50%,#6600ff_0%,hsl(194,100%,51%)_100%)] w-[500px]  rounded-full blur-[100px]" />
          <div className=" absolute inset-y-0 right-16 bg-[radial-gradient(75%_75%_at_50%_50%,#6600ff_0%,hsl(283,100%,51%)_100%)] w-[500px] rounded-full blur-[100px]" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <h4 className="mb-4 md:mb-6 text-center text-transparent bg-clip-text gradient-gray">Desktop Dev</h4>
            <p className="mb-8 max-w-[50ch] px-4 sm:px-0">
              We develop all kinds of custom desktop designs: websites, landing
              pages, web applications with dashboards, whatever. There’s no
              limit to what can be done.
            </p>

            <Button
              link="https://dukamarket-nextjs.vercel.app"
              target="_blank"
              className="btn-primary"
            >
              discover dukamarket
            </Button>
          </div>
          <div className="relative pointer-events-none px-8 sm:px-0">
            <Lottie
              style={{
                maxWidth: "800px",

                pointerEvents: "none",
              }}
              lottieRef={lottieRef}
              onDOMLoaded={() =>
                (lottieRef.current.animationContainerRef.current =
                  containerRef.current)
              }
              interactivity={{
                mode: "scroll",
                actions: [
                  {
                    visibility: [0.3, 0.6],
                    type: "seek",
                    frames: [0, 35],
                  },
                ],
              }}
              animationData={laptop}
            />
            {/* <div className="absolute text-left top-1/4 -z-10 -right-[70%]">
              <h2 className="font-bold text-3xl mb-4">Dukamarket e-commerce</h2>
              <p className="text-xl text-white/50 mb-8">
                We develop all kinds of custom desktop designs: websites,
                <br /> landing pages, web applications with dashboards,
                whatever.
                <br /> There’s no limit to what can be done.
              </p>
              <button className="bg-transparent border-gradient-to-r text-transparent bg-clip-text bg-gradient-to-r  from-red-700 border border-white/30  to-red-300 py-2 px-6 rounded-full capitalize text-lg font-normal">
                Go to discover
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
