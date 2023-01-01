import { Project } from "../data/projects";

export default function ProjectsCard({ title, description, href }: Project) {
  return (
    <div className="rounded-md border border-transparent bg-[#a4885c] bg-opacity-20 dark:bg-opacity-5 p-4 transition duration-200 hover:border-[#a4885c]">
      <a href={href}>
        <h3 className="text-2xl text-[#a4885c]">{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}
