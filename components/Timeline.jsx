import useStaggeringEffect from "@/hooks/useStaggeringEffect";
import pencil from "@/icons/Pencil-closed.png";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  easeOut,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Timeline() {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const yForText = useTransform(scrollYProgress, [0, 0.25], [0, -300]);
  // const y = useTransform(scrollYProgress, [0, 0.125, 0.25], [0, 1, 0]);
  // const y1 = useTransform(scrollYProgress, [0.25, 0.375, 0.5], [0, 1, 0]);
  // const y2 = useTransform(scrollYProgress, [0.5, 0.625, 0.75], [0, 1, 0]);
  // const y3 = useTransform(scrollYProgress, [0.75, 0.875, 1], [0, 1, 0]);

  const yForImage = useTransform(
    scrollYProgress,
    [0.25, 0.375, 0.5, 0.625, 0.75, 1],
    [0, -300, -300, -580, -580, -880]
  );

  const year = [
    {
      title: "Setting a clear mission",
      description:
        "Setting a clear mission Gaining experience The power of now Overcoming pandem",
      year: 2016,
    },
    {
      title: "Gaining experience",
      description:
        "Setting a clear mission Gaining experience The power of now Overcoming pandem",
      year: 2017,
    },
    {
      title: "The power of now",
      description:
        "Setting a clear mission Gaining experience The power of now Overcoming pandem",
      year: 2018,
    },
    {
      title: "Overcoming pandemic challenges",
      description:
        "Setting a clear mission Gaining experience The power of now Overcoming pandem",
      year: 2019,
    },
  ];
  return (
    <div ref={targetRef} className="h-[400vh] pt-36 static bg-white text-black">
      <div className="sticky container top-0 h-screen flex flex-col gap-24 justify-center items-center">
        <motion.h4 style={{ y: yForText }} className="w-[15ch] leading-snug">
          The Ongoing Story of Outcrowd
        </motion.h4>
        <div className="flex justify-between w-full mx-auto h-full">
          <div className="relative text-left">
            {year.map((el, i, arr) => (
              <Title
                key={i}
                arrayLength={arr.length}
                index={i}
                scrollYProgress={scrollYProgress}
              >
                {el.title}
              </Title>
            ))}
          </div>
          <div className="relative flex-1 w">
            <motion.div
              style={{ y: yForImage }}
              className="absolute -top-[150px] pointer-events-none left-[46%]"
            >
              <Image
                src={pencil}
                className=" h-[1260px] pointer-events-none"
                alt=""
              />
              {year.map((el, i, arr) => {
                return (
                  <Year
                    key={i}
                    arrayLength={arr.length}
                    index={i}
                    scrollYProgress={scrollYProgress}
                  >
                    {el.year}
                  </Year>
                );
              })}
            </motion.div>
          </div>
          <div className="relative text-right">
            {year.map((el, i, arr) => (
              <Description
                arrayLength={arr.length}
                key={i}
                index={i}
                scrollYProgress={scrollYProgress}
              >
                {el.description}
              </Description>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Title({ scrollYProgress, children, index, arrayLength }) {
  const increaseBy = 1 / arrayLength;
  const start = 0 + increaseBy * index;
  const end = increaseBy * (index + 1);

  const opacity = useStaggeringEffect(
    scrollYProgress,
    [0, [(start + end) / 2], 1],
    [index === 0 ? 1 : 0, 1, 0],
    {
      arrayLength,
      index,
    }
  );

  return (
    <motion.h4
      style={{ opacity }}
      className="absolute top-0 font-semibold text-3xl min-w-[12ch]"
    >
      {children}
    </motion.h4>
  );
}

function Description({ scrollYProgress, children, index, arrayLength }) {
  const increaseBy = 1 / arrayLength;
  const start = 0 + increaseBy * index;
  const end = increaseBy * (index + 1);

  const opacity = useStaggeringEffect(
    scrollYProgress,
    [0, [(start + end) / 2], 1],
    [index === 0 ? 1 : 0, 1, 0],
    {
      arrayLength,
      index,
    }
  );

  return (
    <motion.p
      style={{ opacity }}
      className="absolute text-[var(--background-color)]   right-0 top-0 w-[20ch]"
    >
      {children}
    </motion.p>
  );
}
function Year({ scrollYProgress, children, index, arrayLength }) {
  const increaseBy = 1 / arrayLength;
  const start = 0 + increaseBy * index;
  const end = increaseBy * (index + 1);

  const opacity = useStaggeringEffect(
    scrollYProgress,
    [0, [(start + end) / 2], 1],
    [index === 0 ? 1 : 0.2, 1, 0.2],
    {
      arrayLength,
      index,
    }
  );

  return (
    <motion.span
      style={{ opacity, marginTop: index * 250 }}
      className={`block left-[20px] font-bold text-2xl absolute top-[243px] rotate-90 `}
    >
      {children}
    </motion.span>
  );
}
