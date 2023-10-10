import Lottie from "lottie-react";
import ageAnimation from "../icons/ageAnimation.json";
import { Children, useRef } from "react";
import {
  useScroll,
  useSpring,
  motion,
  easeOut,
  useTransform,
} from "framer-motion";
import useStaggeringEffect from "@/hooks/useStaggeringEffect";

export default function AgeSection() {
  const ref = useRef();
  const lottieRef = useRef();

  const string = "all these and still";

  const { scrollYProgress: scrollYProgressForWord } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });
  const smoothScrollForWord = useSpring(scrollYProgressForWord, {
    damping: 80,
    stiffness: 400,
    ease: easeOut,
  });

  const opacityLottie = useTransform(smoothScrollForWord, [0.5, 1], [0, 1]);

  const scaleWord = useTransform(smoothScrollForWord, [0.5, 1], [1, 0.8]);
  const opacityWord = useTransform(smoothScrollForWord, [0.5, 1], [1, 0]);
  const filter = useTransform(
    smoothScrollForWord,
    [0.5, 1],
    [`blur(0px)`, `blur(10px)`]
  );
  const translateY = useTransform(smoothScrollForWord, [0.5, 1], [300, -100]);
  return (
    <div ref={ref} className="h-[200vh] relative ">
      <div className="sticky  h-screen flex justify-center items-center top-0">
        <div>
          <motion.h1
            style={{ scale: scaleWord, filter, opacity: opacityWord }}
            className=" text-8xl font-bold tracking-tight"
          >
            {string.split(" ").map((word, i, arr) => (
              <>
                <Word
                  key={i}
                  smoothScrollForWord={smoothScrollForWord}
                  index={i}
                  arrayLength={arr.length}
                >
                  {word}
                </Word>
                <br />
              </>
            ))}
          </motion.h1>
          <motion.div
            className="flex justify-center items-center mt-10"
            style={{ y: translateY, opacity: opacityLottie }}
          >
            <h1 className="font-extrabold text-[16rem] text-transparent bg-clip-text bg-gradient-to-r from-[#5b72e1] via-[#9647cd]  to-[#e240a6]">
              24
            </h1>
            {/* <Lottie
              style={{ width: "300px" }}
              lottieRef={lottieRef}
              onDOMLoaded={() =>
                (lottieRef.current.animationContainerRef.current = ref.current)
              }
              interactivity={{
                mode: "scroll",
                actions: [
                  {
                    visibility: [0.3, 0.4],
                    type: "seek",
                    frames: [0, 62],
                  },
                ],
              }}
              animationData={ageAnimation}
            /> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Word({ children, arrayLength, index, smoothScrollForWord }) {
  const opacity = useStaggeringEffect(smoothScrollForWord, [0, 0.5], [0.1, 1], {
    arrayLength,
    index,
  });
  
  //   const increaseBy = ((1 - startOffsetTime) * endOffsetTime) / arrayLength;
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}
