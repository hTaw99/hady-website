import { motion, stagger, useAnimate, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function WhyI() {
  //   const ref = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    margin: "-50% 100px -10% 0px",
    once: false,
  });

  useEffect(() => {
    if (isInView) {
      animate("h3", { opacity: 1 }, { duration: 1.5, delay: stagger(0.2) });
    }
  }, [isInView, animate]);

  const features = [
    {
      // icon: ,
      title: "Business-centered approach",
      paragraph:
        "Everything we do is geared toward your strategic goals. Essentially, our designs are an effective way to make your business successful.",
    },
    {
      // icon: ,
      title: "Strong marketing tool",
      paragraph:
        "Marketing and design are inextricably linked. We know just how to make them complement each other.",
    },
    {
      // icon: ,
      title: "Close communication",
      paragraph:
        "EWe have found that keeping in touch with our clients accounts for 60% of a given project’s success.",
    },
    {
      // icon: ,
      title: "Meeting the deadlines",
      paragraph:
        "We hate falling behind on a project just as much as our clients. That’s why we never do it.",
    },
    {
      // icon: ,
      title: "Future-proof results",
      paragraph:
        "Fads are fine, but some things are timeless. We make every effort to stay on the cutting edge of design.",
    },
    {
      // icon: ,
      title: "Exceeding Expectations",
      paragraph:
        "You know why we really care about your success? Because it motivates us like nothing else! So it’s a win-win situation.",
    },
  ];

  return (
    <div className="min-h-screen  bg-white text-left text-black  flex justify-center items-center">
      <div className="container py-16 md:py-0">
        <motion.h3
          className={`${
            isInView ? "blur-0" : " blur-sm"
          } transition-all duration-500 text-center md:text-left mb-12 md:mb-24`}
        >
          Why me?
        </motion.h3>
        <div ref={scope} className=" text-center md:text-left grid md:grid-cols-2 lg:grid-cols-3 gap-20 ">
          {features.map((el) => (
            <div key={el.title} className="">
              <div className=" mb-8 mx-auto md:mx-0 relative before:inset-x-0 before:-top-0 before:bg-[radial-gradient(closest-side,rgba(0,0,0,0.3),transparent)] before:absolute before:h-[0.5px] rounded-xl w-20 h-20 bg-[rgba(0,0,0,0.1)] border border-black/10"></div>
              <motion.h3
                //   initial={{ opacity: 0 }}
                //   animate={{ opacity: 1 }}
                className="font-semibold opacity-0 text-xl mb-2"
              >
                {el.title}
              </motion.h3>
              <p className="text-base text-black/50 font-medium">
                {el.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
