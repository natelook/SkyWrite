import { callModule, connectModule } from 'libkernel';
import { useCallback, useEffect, useState } from 'react';

interface CreatePost {
  title: string;
  content: string;
  link: string;
}

const skylink = 'AQCp0ABy7wRCCx1mLKX2ig-cAS7HzDfVBnZCUKlOm_0b4A';

export default function usePosts(userAuthStatus: boolean) {
  const [posts, setPosts] = useState([]);

  const receiveSubscriptionUpdate = (data: any) => {
    setPosts(data);
  };

  const subscribeItems = useCallback(
    async () =>
      connectModule(skylink, 'subscribeItems', {}, receiveSubscriptionUpdate),
    []
  );

  useEffect(() => {
    userAuthStatus ? subscribeItems() : setPosts([]);
  }, [userAuthStatus, subscribeItems]);

  const fetchPosts = async () => {
    const [data, err] = await callModule(skylink, 'getPosts');
    err ? console.log({ err }) : setPosts(data);
  };

  const createPost = async (post: CreatePost) => {
    const [data, err] = await callModule(skylink, 'createPost', post);

    if (err) {
      throw new Error(err);
    }

    return data;
  };

  const persistToSkynet = async () => {
    const [_, err] = await callModule(skylink, 'persistToSkynet', {});
    err && console.error({ myError: err });
  };

  return { posts, createPost, persistToSkynet };
}
