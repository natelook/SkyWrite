export interface CommentProps {
  id: string;
  message: string;
  commentor: string;
  createdAt: Date;
  replies?: CommentProps[];
}

export interface PostProps {
  id: string;
  title: string;
  createdAt: Date;
  upvotes: number;
  downvotes: number;
  subreddit: string;
  comments: CommentProps[];
  creator: string;
}
