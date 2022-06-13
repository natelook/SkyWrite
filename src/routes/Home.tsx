import PostPreview from "../components/PostPreview";
import { fakePosts } from "../lib/fake-posts";

export default function Home() {
  return (
    <div className='space-y-3'>
      {fakePosts.map((post) => (
        <PostPreview post={post} />
      ))}
    </div>
  );
}
