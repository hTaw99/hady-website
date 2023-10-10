import React, { useRef } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";

export default function SocialMediaLinks() {
  const ref = useRef();
  const mouseX = useMotionValue(Infinity);
  const socialLinks = [
    {
      title: "facebook",
      path: "#",
      icon: FaFacebookF,
    },
    {
      title: "twitter",
      path: "#",
      icon: FaXTwitter,
    },
    {
      title: "github",
      path: "#",
      icon: FaGithub,
    },
    {
      title: "linkedin",
      path: "#",
      icon: FaLinkedinIn,
    },
    {
      title: "instagram",
      path: "#",
      icon: FaInstagram,
    },
  ];
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        mouseX.set(e.pageX);
        // console.log(e.pageX);
      }}
      onMouseLeave={(e) => {
        mouseX.set(Infinity);
        // console.log(e.pageX);
      }}
      className="border border-white/10 relative before:inset-x-0 before:-top-0 before:bg-[radial-gradient(closest-side,rgba(255,255,255,0.3),transparent)] before:absolute before:h-[0.5px] rounded-2xl transition-all max-w-min  p-4 px-4"
    >
      <ul className="flex justify-center h-10 gap-2 items-end">
        {socialLinks.map((link, i) => (
          <SocialIcon {...link} mouseX={mouseX} key={i} />
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ mouseX, icon, title, path }) {
  const ref = useRef(null);
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const widthAsync = useTransform(distance, [-100, 0, 100], [40, 60, 40]);
  const width = useSpring(widthAsync, {
    damping: 15,
    stiffness: 200,
    mass: 0.1,
  });

  return (
    <motion.li
      ref={ref}
      style={{ width }}
      key={title}
      className=" backdrop-blur w-10 aspect-square flex items-center justify-center transition-all duration-100 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/10 bg-white/5 rounded-xl p-2 cursor-pointer"
    >
      <Link rel="stylesheet" href={path} title={title}>
        {icon({ size: 24 })}
      </Link>
    </motion.li>
  );
}
