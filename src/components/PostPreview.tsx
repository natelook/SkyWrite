import type { PostProps } from "@lib/types";
import dayjs from "dayjs";
import { useState } from "react";
import { Link } from "react-router-dom";
import VoteButton from "./VoteButton";
import placeholder from "../imgs/placeholder-image.png";

type VoteProp = "upvote" | "downvote" | null;

interface VoteButtonsProps {
  currentVote?: VoteProp;
  score: number;
  vote: (vote: VoteProp) => void;
}

function VoteButtons({ currentVote, score, vote }: VoteButtonsProps) {
  return (
    <div className='flex flex-col items-center'>
      <VoteButton vote={(v) => vote(v)} active={currentVote === "upvote"} />
      <span className='text-gray-500 cursor-default select-none'>{score}</span>
      <VoteButton
        vote={(v) => vote(v)}
        downVote
        active={currentVote === "downvote"}
      />
    </div>
  );
}

export default function PostPreview({ post }: { post: PostProps }) {
  const [currentVote, setCurrentVote] = useState<VoteProp>();
  const score = post.upvotes - post.downvotes;
  const vote = (voteType: "upvote" | "downvote") => {
    console.log(voteType);
  };
  return (
    <div className='flex space-x-3'>
      <VoteButtons
        currentVote={currentVote}
        score={score}
        vote={(v) => setCurrentVote(v)}
      />
      <div className='h-16 w-16'>
        <img src={placeholder} height='300px' width='300px' alt='preview' />
      </div>
      <div>
        <p className='text-blue-700 text-xl capitalize'>
          <Link to={`/r/${post.subreddit}/${post.id}`}>{post.title}</Link>
        </p>
        <p className='text-xs font-gray-600'>
          Posted {dayjs(post.createdAt).format("MMMM D, YYYY h:mma")} by{" "}
          <Link to={`/u/${post.creator}`}>
            <span className='text-blue-600'>{post.creator}</span>
          </Link>{" "}
          to{" "}
          <Link to={`/r/${post.subreddit}`}>
            <span className='text-blue-600'>/r/{post.subreddit}</span>
          </Link>
        </p>
        <ul className='text-xs text-gray-600 font-bold flex items-center space-x-3'>
          <li>
            {post.comments.length}{" "}
            {post.comments.length === 1 ? "Comment" : "Comments"}
          </li>
          <li>Share</li>
          <li>Save</li>
          <li>Hide</li>
        </ul>
      </div>
    </div>
  );
}
