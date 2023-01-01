import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
  return matter(fs.readFileSync(`posts/${slug}.md`, "utf8"));
};

export const generateStaticParams = async () => {
  return getPostMetadata().map((post) => ({
    slug: post.slug,
  }));
};

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="my-12 rounded-md bg-neutral-800 p-4 text-center drop-shadow-lg">
        <h1 className="text-2xl text-emerald-500">{post.data.title}</h1>
        <p className="mt-2 text-slate-400">{post.data.date}</p>
      </div>

      <article className="prose prose-invert prose-headings:text-[#a4885c]">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
