import Link from "next/link";
import { PostMetadata } from "./getPostMetadata";

export default function PostPreview(props: PostMetadata) {
  return (
    <Link
      href={`/posts/${props.slug}`}
      className="rounded-md border border-transparent bg-gray-100 dark:bg-neutral-800 p-4 shadow-sm drop-shadow-lg transition duration-200 hover:border-[#a4885c]"
    >
      <p className="text-sm text-slate-600 dark:text-slate-400">{props.date}</p>

      <div>
        <h2 className="text-[#a4885c]">{props.title}</h2>
      </div>
      <p>{props.subtitle}</p>
    </Link>
  );
}
