import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

const bottomHeader = (
  <div className="flex flex-wrap justify-center text-sm border-none border-zinc-400 py-6 px-6 text-zinc-600 items-center">
    <div className="color-square rounded inline-block" style={{ backgroundColor: '#7dd3fc', width: '16px', height: '16px' }}></div>
    <p className="w-36 md:w-32 px-2 mb-2 md:mb-0 inline-block truncate">distilled note</p>

    <div className="color-square rounded inline-block" style={{ backgroundColor: '#bef264', width: '16px', height: '16px' }}></div>
    <p className="w-36 md:w-32 px-2 mb-2 md:mb-0 inline-block truncate">literature note</p>

    <div className="color-square rounded inline-block" style={{ backgroundColor: '#fb923c', width: '16px', height: '16px' }}></div>
    <p className="w-36 md:w-32 px-2 mb-2 md:mb-0 inline-block truncate">reference note</p>

    <div className="color-square rounded inline-block" style={{ backgroundColor: '#c4b5fd', width: '16px', height: '16px' }}></div>
    <p className="w-36 md:w-40 px-2 inline-block truncate">daily learning update</p>
  </div>
);

  return (
    <><div>{bottomHeader}</div><div className="grid grid-cols-1 gap-2">{postPreviews}</div></>
  );
};

export default HomePage;