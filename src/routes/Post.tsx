import PostPreview from "../components/PostPreview";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fakePosts } from "../lib/fake-posts";
import { PostProps } from "../lib/types";

export default function Post() {
  const [post, setPost] = useState<PostProps | null>();
  const params = useParams();
  useEffect(() => {
    const thePost = fakePosts.filter((post) => params.postId === post.id);
    setPost(thePost[0]);
  }, [params]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <PostPreview post={post} />
    </div>
  );
}
