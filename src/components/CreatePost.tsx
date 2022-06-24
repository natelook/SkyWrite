import useKernelAuth from 'hooks/useKernelAuth';
import usePosts from 'hooks/usePosts';
import { useForm } from 'react-hook-form';
import Editor from './Editor';

export default function CreatePost() {
  const { handleSubmit, register } = useForm();

  const { userAuthStatus } = useKernelAuth();
  const { createPost, persistToSkynet } = usePosts(userAuthStatus);

  const onSubmit = async (values: any) => {
    const { title, content, link } = values;
    try {
      await createPost({ title, content, link });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div>
        <input
          className="px-3 pt-5 rounded block w-full outline-none font-bold text-5xl pb-4"
          {...register('title')}
          placeholder="Start by writing a title..."
          id="title"
        />
      </div>
      <div className="px-3">
        <Editor />
      </div>
      <div className="flex space-x-3 mt-5">
        {/* 
        <button
          type="button"
          onClick={persistToSkynet}
          className="btn bg-gray-100 border border-green text-green w-full"
        >
          Persist to Skynet
        </button>
        */}
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </form>
  );
}
