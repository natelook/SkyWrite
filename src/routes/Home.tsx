import PostPreview from '../components/PostPreview';
import usePosts from 'hooks/usePosts';
import useKernelAuth from 'hooks/useKernelAuth';

export default function Home() {
  const { userAuthStatus } = useKernelAuth();
  const { posts } = usePosts(userAuthStatus);
  console.log(posts);
  return (
    <div className="grid grid-cols-2 gap-5">
      <PostPreview
        post={{
          title: 'Is SkyNet the best?!',
          subtitle: 'Our top researchers went found out...',
          body: 'Lorem ipsum',
          publishDate: new Date(),
          categories: ['Tech'],
          publishedBy: 'nat3',
        }}
      />
      <PostPreview
        post={{
          title: 'We Built Our First App on SkyNet',
          subtitle: 'This is what we learned...',
          body: 'Lorem ipsum',
          publishDate: new Date(),
          categories: ['Tech'],
          publishedBy: 'nat3',
        }}
      />
    </div>
  );
}
