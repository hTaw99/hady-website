import { useSkillStore } from "@/store/store";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SkillTitle({ children, id }) {
  const { setSkillInView, skillInView } = useSkillStore((state) => state);
  const listRef = useRef();
  const isInView = useInView(listRef, { margin: "-50% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) setSkillInView(id);
    if (!isInView && skillInView === id) setSkillInView(null);
  }, [isInView, setSkillInView, skillInView, id]);

  return (
    <li
      className={`${
        isInView ? "text-4xl sm:text-5xl xl:text-6xl text-white" : "text-3xl sm:text-4xl xl:text-5xl text-white/20"
      } last:mb-0  text-center sm:text-left transition-all mx-auto sm:w-full w-[10ch] duration-300`}
      ref={listRef}
    >
      
      {children}
    </li>
  );
}
