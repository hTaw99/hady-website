"use client";

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
import IdentityLogo from "@/icons/IdentityLogo";
import MetaLogo from "@/icons/MetaLogo";
import EdaLogo from "@/icons/EdaLogo";
const Logos = () => {
  const companies = [
    {
      name: "identity",
      logo: IdentityLogo,
    },
    {
      name: "meta",
      logo: MetaLogo,
    },
    {
      name: "eda",
      logo: EdaLogo,
    },
    {
      name: "meta",
      logo: MetaLogo,
    },
    {
      name: "identity",
      logo: IdentityLogo,
    },
  ];

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

  const x = useTransform(baseX, (v) => `${wrap(0, -20, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, d) => {
    let moveBy = directionFactor.current * (d / 200);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className=" h-screen  text-white flex flex-col items-center justify-center mx-auto overflow-hidden p-2 relative z-30">
      <div className="absolute w-[800px] h-40 top-[35%] opacity-40 -z-10">
        <div className=" absolute inset-y-0 left-16 bg-[radial-gradient(75%_75%_at_50%_50%,#6600ff_0%,hsl(194,100%,51%)_100%)] w-[500px]  rounded-full blur-[100px]" />
        <div className=" absolute inset-y-0 right-16 bg-[radial-gradient(75%_75%_at_50%_50%,#6600ff_0%,hsl(283,100%,51%)_100%)] w-[500px] rounded-full blur-[100px]" />
      </div>
      <h4 className="bg-clip-text text-transparent gradient-gray mb-4 md:mb-8 max-w-[10ch]">
        Parterners
      </h4>
      <p className="mb-16 max-w-[50ch] px-4 sm:px-0">
        Over the years, I’ve been fortunate to work with some incredible brands
        – both as clients and through my personal projects.
      </p>

      <div
        style={{
          WebkitMaskBoxImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, #000000 12.5%, #000000 87.5%, rgba(0, 0, 0, 0) 100%)",
        }}
        className="flex items-center w-full md:w-1/2 mx-auto overflow-hidden"
      >
        <motion.div
          style={{ x }}
          className=" text-6xl h-max flex gap-8 text-center text-neutral-400 "
        >
          {companies.map((el) => (
            <div
              key={el.name}
              className="w-32 "

              // className="w-40 h-20 rounded-2xl flex justify-center items-center relative before:inset-x-0 before:-top-0 before:bg-[radial-gradient(closest-side,rgba(255,255,255,0.5),transparent)] before:absolute before:h-[1px] bg-[rgba(255,255,255,0.02)] border border-white/10  "
            >
              {el.logo({ className: "w-full h-full opacity-50" })}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Logos;
