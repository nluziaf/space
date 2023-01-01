import { Tech } from "../data/techs";

export default function TechCard({ category, tech }: Tech) {
  return (
    <div className="rounded-md border border-transparent bg-[#a4885c] bg-opacity-5 p-4 transition duration-200 hover:border-[#a4885c]">
      <h3 className="text-2xl text-[#a4885c]">{category}</h3>
      <p>{tech}</p>
    </div>
  );
}
