import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

export default function BlogPage() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="space-y-6">
      <h1 className="text-6xl font-bold text-emerald-500">Posts</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {postPreviews}
      </div>
    </div>
  );
}
