import IdentityLogo from "@/icons/IdentityLogo";
import Logo from "@/icons/Logo";
import Link from "next/link";
import React from "react";

const navbarLinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "about",
  },
  {
    name: "works",
    path: "works",
  },
  {
    name: "contact",
    path: "contact",
  },
];

export default function Header() {
  return (
    <>
      <header className="absolute z-50 text-white top-0 py-6 inset-x-0">
        <div className="flex w-1/2 mx-auto justify-between  ">
          <div className="flex gap-2 items-center ">
            {/* <Logo className="w-8 h-8 " /> */}
            <IdentityLogo className="w-40" />
            {/* <span className="text-lg">hady tawfik</span> */}
          </div>
        </div>
      </header>
      <nav className="fixed top-0 inset-x-0 text-white z-50 w-1/2 py-4 mx-auto flex justify-center items-center ">
        <ul className="flex gap-8 font-light capitalize bg-black/5 backdrop-blur-xl border border-white/10 py-3 px-8 rounded-full">
          {navbarLinks.map((link, i) => (
            <li
              key={i}
              className="text-sm sm:text-base hover:bg-gradient-to-l hover:text-white/50 transition-all duration-300"
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
