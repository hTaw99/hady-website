import React, { useRef } from "react";
import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import animation from "../icons/animation.json";
import macAnimation from "../icons/macAnimation.json";

export default function Scroll() {
  const ref = useRef(null);
  const lottieRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [500, 0], {
    ease: easeOut,
  });
  const opacity = useTransform(scrollYProgress, [0.3, 1], [0, 1], {
    ease: easeOut,
  });
  const opacityForGradient = useTransform(scrollYProgress, [0.3, 1], [0, 0.5], {
    ease: easeOut,
  });

  return (
    <div ref={ref} className="h-[200vh]  relative">
      <div className=" sticky z-50 overflow-hidden container inset-0 h-screen flex justify-center items-center">
        <motion.div
          style={{ opacity: opacityForGradient }}
          className="absolute w-[900px] h-40 top-[42%] -z-50"
        >
          <div className=" absolute inset-y-0 left-16 bg-[radial-gradient(75%_75%_at_50%_50%,#1ba3ff_0%,hsl(194,100%,51%)_100%)] w-[500px]  rounded-full blur-[100px]" />
          <div className=" absolute inset-y-0 right-16 bg-[radial-gradient(75%_75%_at_50%_50%,#6600ff_0%,#5336ff_100%)] w-[500px] rounded-full blur-[100px]" />
        </motion.div>
        <div className="relative w-full flex flex-col justify-center items-center">
          <Lottie
            // style={{ width: "550px" }}
            lottieRef={lottieRef}
            className="max-w-[550px] box-border md:w"
            onDOMLoaded={() =>
              ref
                ? (lottieRef.current.animationContainerRef.current =
                    ref.current)
                : null
            }
            interactivity={{
              mode: "scroll",
              actions: [
                {
                  visibility: [0.3, 0.6],
                  type: "seek",
                  frames: [0, 65],
                },
              ],
            }}
            animationData={animation}
          />
          <motion.p
            style={{ y, opacity }}
            className="z-50 absolute top-full mt-4 px-4 sm:px-0 max-w-[50ch]"
          >
            We’ve had years of experience and developed dozens of projects. So
            we know what to do to achieve results that will make our clients
            proud.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
