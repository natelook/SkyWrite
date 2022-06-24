import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

interface PostProps {
  title: string;
  subtitle: string;
  body: string;
  publishDate: Date;
  categories: string[];
  publishedBy: string;
}

interface PostPreviewProps {
  post: PostProps;
}

export default function PostPreview({ post }: PostPreviewProps) {
  return (
    <Link to="/">
      <div className="grid gap-5 grid-cols-2 hover:shadow-lg transition duration-200 px-5 py-3 rounded-lg">
        <div>
          <div className="mb-3">
            <p className="text-xl font-bold">{post.title}</p>
            <p className="text-gray-500">{post.subtitle}</p>
          </div>
          <div className="flex space-x-6">
            <div className="flex space-x-1">
              <div className="h-6 w-6 bg-blue-500 overflow-hidden rounded-full" />
              <span>{post.publishedBy}</span>
            </div>
            <span className="text-gray-500">
              {dayjs(post.publishDate).format('MMMM d')}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={'https://via.placeholder.com/440x200'}
            height="100px"
            width="220px"
            alt=""
            className="border border-black block rounded"
          />
        </div>
      </div>
    </Link>
  );
}
