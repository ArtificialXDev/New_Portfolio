import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";

import FramerWrapper from "@/components/animation/FramerWrapper";
const skillPage = () => {
  const programmingLanguages = [
    {
      name: "HTML5",
      icon: "https://skills-icons.vercel.app/api/icons?i=html",
    },
    {
      name: "CSS3",
      icon: "https://skills-icons.vercel.app/api/icons?i=css",
    },
    {
      name: "JavaScript",
      icon: "https://skills-icons.vercel.app/api/icons?i=js",
    },
    {
      name: "TypeScript",
      icon: "https://skills-icons.vercel.app/api/icons?i=ts",
    },
    {
      name: "C++",
      icon: "https://skills-icons.vercel.app/api/icons?i=cpp",
    },
    {
      name: "Python",
      icon: "https://skills-icons.vercel.app/api/icons?i=python",
    },
    {
      name: "Node.Js",
      icon: "https://skills-icons.vercel.app/api/icons?i=node",
    },
    {
      name: "Deno",
      icon: "https://skills-icons.vercel.app/api/icons?i=deno",
    },
    {
      name: "TailwindCSS",
      icon: "https://skills-icons.vercel.app/api/icons?i=tailwind",
    },
    {
      name: "Npm",
      icon: "https://skills-icons.vercel.app/api/icons?i=npm",
    },
    {
      name: "Pnpm",
      icon: "https://skills-icons.vercel.app/api/icons?i=pnpm",
    },
    {
      name: "Markdown",
      icon: "https://skills-icons.vercel.app/api/icons?i=md",
    },
    {
      name: "Flask",
      icon: "https://skills-icons.vercel.app/api/icons?i=flask",
    },
    {
      name: "Express",
      icon: "https://skills-icons.vercel.app/api/icons?i=express",
    },
    {
      name: "Discord.Js",
      icon: "https://skills-icons.vercel.app/api/icons?i=discordjs",
    },
    {
      name: "C#",
      icon: "https://skills-icons.vercel.app/api/icons?i=csharp",
    },
    {
      name: "Kotlin",
      icon: "https://skills-icons.vercel.app/api/icons?i=kotlin",
    },
  ];


  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <LightbulbIcon className="w-4 h-4" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            Currently I am a fresher and I have a solid understand of HTML5,
            CSS3, JS, TS and React, including responsive design principles. I
            specialize in building web applications and sites using Javascript,
            Typescript, React, Nextjs & Node.
          </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.3} className="block w-full">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Programming Languages
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={programmingLanguages} />
          </div>
        </FramerWrapper>

      </div>
    </div>
  );
};

export default skillPage;
