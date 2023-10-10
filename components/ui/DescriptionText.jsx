import React from "react";

export default function DescriptionText({ children, className }) {
  return (
    <p
      className={`text-base leading-6 font-semibold md:text-2xl md:leading-7 text-white/50 ${className}`}
    >
      {children}
    </p>
  );
}
