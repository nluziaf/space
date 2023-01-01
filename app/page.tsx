import { SocialIcon } from "react-social-icons";
import CurrentlyPlaying from "../components/CurrentlyPlaying";
import ProjectsCard from "../components/ProjectsCard";
import TechCard from "../components/TechCard";
import { ProjectData } from "../data/projects";
import { TechData } from "../data/techs";

export default function HomePage() {
  const projectsSection = (
    <div className="space-y-4 rounded-md bg-neutral-800 p-4 drop-shadow-lg">
      <h2 className="text-3xl font-bold text-emerald-500">Projects</h2>
      <div className="space-y-2">
        {ProjectData.map((project) => (
          <ProjectsCard
            title={project.title}
            description={project.description}
            href={project.href}
          />
        ))}
      </div>
    </div>
  );

  const techSection = (
    <div className="space-y-4 rounded-md bg-neutral-800 p-4 drop-shadow-lg">
      <h2 className="text-3xl font-bold text-emerald-500">Technologies used</h2>
      <div className="space-y-2">
        {TechData.map((tech) => (
          <TechCard category={tech.category} tech={tech.tech} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <h1 className="text-6xl font-bold text-emerald-500">NLuziaf</h1>
      <p className="text-xl">
        18-year-old Student, Gamer, and Minecraft Modpack Creator from Indonesia
        that is interested in learning Front End Web Development.
      </p>
      <div className="items-center space-y-4 md:flex md:space-x-4 md:space-y-0">
        <a
          href="mailto:lategreentea835@gmail.com"
          className="rounded-md border border-transparent bg-emerald-500 px-4 py-2 text-lg text-black transition duration-200 hover:border-emerald-500 hover:bg-transparent hover:text-neutral-300"
        >
          Get in touch
        </a>
        <div className="space-x-4 pt-2 md:pt-0">
          <SocialIcon
            url="https://www.instagram.com/nluziaf"
            bgColor="#262626"
            fgColor="#a4885c"
          />
          <SocialIcon
            url="https://www.twitter.com/nluziaf"
            bgColor="#262626"
            fgColor="#a4885c"
          />
          <SocialIcon
            url="https://www.github.com/nluziaf"
            bgColor="#262626"
            fgColor="#a4885c"
          />
        </div>
      </div>
      <div className="space-y-4 rounded-md bg-neutral-800 p-4 drop-shadow-lg">
        <h2 className="text-3xl font-bold text-emerald-500">
          Spotify Activity
        </h2>
        <CurrentlyPlaying />
      </div>
      {techSection}
      {projectsSection}
    </div>
  );
}
