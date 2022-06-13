import { motion } from "framer-motion";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/solid";
import classNames from "classnames";

const VoteButton = ({
  downVote = false,
  vote,
  active,
}: {
  downVote?: boolean;
  vote: (vote: "upvote" | "downvote") => void;
  active: boolean;
}) => (
  <motion.button
    whileTap={{ y: !downVote ? -3 : 3 }}
    onClick={() => vote(!downVote ? "upvote" : "downvote")}
    className={classNames("block w-4 h-4", {
      "text-gray-700": !active,
      "text-orange-500": active && !downVote,
      "text-teal-500": active && downVote,
    })}
    transition={{ duration: 0.1 }}
  >
    {!downVote ? <ArrowUpIcon /> : <ArrowDownIcon />}
  </motion.button>
);

export default VoteButton;
