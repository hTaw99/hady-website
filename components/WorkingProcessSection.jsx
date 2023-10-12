import useStaggeringEffect from "@/hooks/useStaggeringEffect";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  easeOut,
} from "framer-motion";
import React, { useRef } from "react";

const cards = [
  {
    title: "immersion",
    description:
      "Going deep into client’s business to understand its core sense, goals and challenges to build partnership.",
  },
  {
    title: "immersion",
    description:
      "Going deep into client’s business to understand its core sense, goals and challenges to build partnership.",
  },
  {
    title: "immersion",
    description:
      "Going deep into client’s business to understand its core sense, goals and challenges to build partnership.",
  },
  {
    title: "immersion",
    description:
      "Going deep into client’s business to understand its core sense, goals and challenges to build partnership.",
  },
  {
    title: "immersion",
    description:
      "Going deep into client’s business to understand its core sense, goals and challenges to build partnership.",
  },
];

export default function WorkingProcessSection() {
  const targetRef = useRef();

  const { scrollYProgress: scrollYProgressForCircles } = useScroll({
    target: targetRef,
    offset: ["start center", "end end"],
  });

  const smoothScrollForCircles = useSpring(scrollYProgressForCircles, {
    damping: 80,
    stiffness: 800,
    ease: easeOut,
  });

  const transform = useTransform(
    smoothScrollForCircles,
    [0.05, 0.15],
    ["translate3d(-800px,0px,0px)", "translate3d(0px,0px,0px)"]
  );
  const transform2 = useTransform(
    smoothScrollForCircles,
    [0.05, 0.15],
    ["translate3d(800px,0px,0px)", "translate3d(0px,0px,0px)"]
  );
  const transform3 = useTransform(
    smoothScrollForCircles,
    [0.05, 0.15],
    ["translate3d(-390px,-600px,0px)", "translate3d(0px,0px,0px)"]
  );
  const transform4 = useTransform(
    smoothScrollForCircles,
    [0.05, 0.15],
    ["translate3d(390px,-600px,0px)", "translate3d(0px,0px,0px)"]
  );
  const transform5 = useTransform(
    smoothScrollForCircles,
    [0.05, 0.15],
    ["translate3d(-390px,600px,0px)", "translate3d(0px,0px,0px)"]
  );
  const transform6 = useTransform(
    smoothScrollForCircles,
    [0.05, 0.15],
    ["translate3d(390px,600px,0px)", "translate3d(0px,0px,0px)"]
  );
  const opacityCircles = useTransform(
    smoothScrollForCircles,
    [0.05, 0.15],
    [0, 1]
  );
  const textOpacity = useTransform(smoothScrollForCircles, [0.2, 0.3], [0, 1]);

  const scaleCircles = useTransform(
    smoothScrollForCircles,
    [0.15, 0.2],
    [1, 0.7]
  );

  const rotateCircles = useTransform(
    smoothScrollForCircles,
    [0.15, 1],
    [0, 1000]
  );
  const y = useTransform(smoothScrollForCircles, [0.2, 0.3], [0, -250]);

  return (
    <div ref={targetRef} className="h-[400vh]">
      <div className="sticky h-screen overflow-hidden top-0">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <motion.div
            style={{ scale: scaleCircles, y, rotateZ: rotateCircles }}
            className="[&>*]:w-24 [&>*]:h-24 [&>*]:rounded-full [&>*]:border-4 relative flex h-[180px] justify-center items-center"
          >
            <motion.div
              style={{ transform: transform, opacity: opacityCircles }}
            />
            <motion.div
              style={{ transform: transform2, opacity: opacityCircles }}
              className=""
            />
            <motion.div
              style={{ transform: transform3, opacity: opacityCircles }}
              className="absolute top-0 left-6 "
            />
            <motion.div
              style={{ transform: transform4, opacity: opacityCircles }}
              className="absolute top-0 right-6 "
            />
            <motion.div
              style={{ transform: transform5, opacity: opacityCircles }}
              className="absolute bottom-0 left-6 "
            />
            <motion.div
              style={{ transform: transform6, opacity: opacityCircles }}
              className="absolute bottom-0 right-6 "
            />
          </motion.div>
          <motion.div className="w-full  px-6" style={{ y }}>
            <motion.h4
              style={{ opacity: textOpacity }}
              className="font-extrabold  mb-10"
            >
              Working Process
            </motion.h4>
            <div className="relative  text-center w-full flex flex-col justify-center items-center ">
              {cards.map((card, i, arr) => (
                <Card
                  key={i}
                  smoothScrollForCircles={smoothScrollForCircles}
                  index={i}
                  arrayLength={arr.length}
                >
                  <h4 className="font-bold capitalize text-2xl tracking-tight mb-4">
                    {card.title}
                  </h4>
                  <p className="text-black font-normal max-w-[50ch] mx-auto">
                    {card.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Card({ arrayLength, index, smoothScrollForCircles, children }) {
  const y = useStaggeringEffect(
    smoothScrollForCircles,
    [0.2, 1],
    [500, index * 80],
    {
      arrayLength,
      index,
    }
  );
  const opacity = useStaggeringEffect(
    smoothScrollForCircles,
    [0.2, 1],
    [0, 1],
    {
      arrayLength,
      index,
    }
  );

  return (
    <motion.div
      style={{ y, opacity }}
      className="absolute top-0 rounded-2xl text-black bg-white p-8"
    >
      {children}
    </motion.div>
  );
}
