import fs from "fs";
import matter from "gray-matter";

export interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
}

export default function getPostMetadata(): PostMetadata[] {
  const markdownPosts = fs
    .readdirSync("posts/")
    .filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const matterResult = matter(fs.readFileSync(`posts/${fileName}`, "utf8"));
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
}
