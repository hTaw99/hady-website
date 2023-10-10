import { motion, useTransform } from "framer-motion";
import SocialMediaLinks from "./SocialMediaLinks";
import Logo from "@/icons/Logo";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Footer = ({ smoothScroll }) => {
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
  const opacity = useTransform(smoothScroll, [0, 0.5], [0, 1]);
  return (
    <>
      <div className="h-[50vh] invisible"></div>
      {/* <motion.footer
        style={{ opacity }}
        className="text-center bg-[radial-gradient(circle_closest-corner_at_50%_100%,_#230202_0%,_transparent_100%)]  py-10 pt-80 fixed top-auto bottom-0  right-0 left-0  text-white"
      > */}
        <motion.footer
        ref={bgRef}
      style={{ opacity }}
      className="text-center before:inset-0 before:absolute before:-z-50  before:bg-[radial-gradient(circle_farthest-corner_at_var(--x,500px)_var(--y,500px),_#1a0740_0%,_transparent_100%)]  py-10 pt-[700px] fixed   inset-0  text-white"
    >
        {/*  */}
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex flex-col justify-center items-center">
            <div className="p-6 bg-gradient-to-t from-red-700  to-red-500 mb-6 mx-auto w-24 h-24 rounded-2xl flex justify-center  items-center">
              <Logo className="w-full h-full" />
            </div>
            <h2 className="mb-4">
              Say Hello! <br />
            </h2>
            <p className="text-xl md:text-2xl  mb-6 text-white/50 max-w-[40ch]">
              Have an opportunity, wanna collaborate on something cool or
              just say hello!
            </p>
            <button className="px-4 relative py-2 before:inset-x-0 before:-top-0 before:bg-[radial-gradient(closest-side,rgba(255,255,255,0.5),transparent)] before:absolute before:h-[0.5px] group hover:border-white/40 transition-all duration-300  text-white font-semibold text-sm rounded-full border border-white/20">
              <code className="text-white/60 group-hover:text-white transition-all duration-300">
                hady.tawfik1999@gmail.com{" "}
                <span className="text-white/30">|</span>{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Contact &rarr;
                </span>{" "}
              </code>
            </button>
          </div>
          <div className="">
            <div className="mt-12 mb-6 pb-6 border-b border-white/20 w-4/6 mx-auto flex justify-between items-center">
              <SocialMediaLinks />
              <ui className="md:flex hidden  gap-4 text-white text-lg list-none">
                <li>
                  {" "}
                  <Link href="#">Works</Link>
                </li>
                {/* <li>Features</li>
                <li>Integrations</li> */}
                <li>
                  <Link href="#">About me</Link>
                </li>
              </ui>
            </div>
            <span className="text-sm md:text-base text-white/40">
              © 2023 Hady Tawfik. Made by love, Next.js & figma
            </span>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
