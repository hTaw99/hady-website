import { useSkillStore } from "@/store/store";
import SkillCard, {
  BackEnd,
  FrontEnd,
  GraphicDesign,
  MotionGraphic,
  WebDesign,
} from "./SkillCard";
import SkillTitle from "./SkillTitle";

const skillTitles = [
  {
    id: 1,
    title: "FrontEnd Developer",
    card: FrontEnd,
  },
  { id: 2, title: "BackEnd Developer", card: BackEnd },
  { id: 3, title: "Web designer", card: WebDesign },
  { id: 4, title: "Motion Graphic", card: MotionGraphic },
  { id: 5, title: "Graphic Designer", card: GraphicDesign },
];
export default function SkillSection() {
  const { skillInView } = useSkillStore((state) => state);
  return (
    <div className="min-h-screen  ">
      {/* <div className="min-h-screen py-24 relative before:absolute before:animate-blob before:top-0 before:w-1/3 before:h-2/3 before:bg-blue-500/10 before:rounded-full before:blur-[250px]"> */}
      <div className="relative container   flex gap-10 items-start">
        <div className="w-full  py-[50vh]">
          <ul className="font-extrabold flex flex-col gap-40">
            {skillTitles.map((skill) => (
              <SkillTitle id={skill.id} key={skill.title}>
                {skill.title}
              </SkillTitle>
            ))}
          </ul>
        </div>
        <div className=" w-full fixed bottom-0  right-0 p-4 lg:p-0 lg:sticky lg:top-0 h-screen flex items-end justify-end lg:items-center">
          <div
            className={`absolute w-[330px] sm:w-[400px] lg:w-full lg:relative aspect-square ${
              !skillInView ? "pointer-events-none opacity-0 bg-transparent lg:opacity-100 lg:bg-white/5" : "bg-transparent"
            }  rounded-3xl origin-bottom-right transition-all duration-300 `}
          >
            {skillTitles.map((skill) => (
              <skill.card id={skill.id} key={skill.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="w-full flex justify-center items-center">
  <div className="w-[1px] h-[190px] bg-gradient-to-b from-[#070000] to-[#ffffff]/30" />
</div> */
}
