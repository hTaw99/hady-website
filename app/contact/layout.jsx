import React from "react";

export default function layout({ children }) {
  return (
    <main className="bg-[var(--background-color)] h-screen text-white">{children}</main>
  );
}
