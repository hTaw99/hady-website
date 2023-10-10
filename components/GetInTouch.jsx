import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";

export default function GetInTouch() {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-0, -100, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, d) => {
    let moveBy = directionFactor.current * (d / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="h-[15vh] md:h-[25vh] bg-white p-6 md:p-10 rounded-b-[48px]">
      <div className="w-full whitespace-nowrap flex-nowrap flex overflow-hidden items-center bg-black rounded-3xl h-full">
        <motion.div
          style={{ x }}
          className=" tracking-tighter font-bold flex whitespace-nowrap flex-nowrap justify-center items-center gap-10"
        >
          <h2 className="">Get in Touch </h2>
          <span>.</span>
          <h2>Get in Touch</h2>
          <span>.</span>
          <h2>Get in Touch</h2>
          <span>.</span>
          <h2>Get in Touch</h2>
          <span>.</span>
          <h2>Get in Touch</h2>
          <span>.</span>
          <h2>Get in Touch</h2>
          <span>.</span>
          <h2>Get in Touch</h2>
          <span>.</span>
          <h2>Get in Touch</h2>
          <span>.</span>
          <h2>Get in Touch</h2>
          <span>.</span>
        </motion.div>
      </div>
    </div>
  );
}
