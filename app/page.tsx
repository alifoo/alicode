import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const bottomHeader = (
    <div className="flex flex-col md:flex-row justify-center text-sm border-none border-zinc-400 py-6 px-6 text-zinc-600 items-center">
      <div className="color-square rounded inline-block ring-offset-2 ring-zinc-400 ring-1 dark:ring-violet-500 dark:ring-2 dark:ring-offset-zinc-700" style={{ backgroundColor: '#7dd3fc', width: '16px', height: '16px' }}></div>
      <p className="text-xs md:w-fit md:h-fit px-3 mb-2 md:mb-0 inline-block truncate py-2 md:py-0 dark:text-zinc-200 ">distilled note</p>
  
      <div className="color-square rounded inline-block ring-offset-2 ring-zinc-400 ring-1 dark:ring-violet-500 dark:ring-2 dark:ring-offset-zinc-700" style={{ backgroundColor: '#bef264', width: '16px', height: '16px' }}></div>
      <p className="text-xs md:w-fit md:h-fit px-3 mb-2 md:mb-0 inline-block truncate py-2 md:py-0 dark:text-zinc-200">literature note</p>
  
      <div className="color-square rounded inline-block ring-offset-2 ring-zinc-400 ring-1 dark:ring-violet-500 dark:ring-2 dark:ring-offset-zinc-700" style={{ backgroundColor: '#fb923c', width: '16px', height: '16px' }}></div>
      <p className="text-xs md:w-fit md:h-fit px-3 mb-2 md:mb-0 inline-block truncate py-2 md:py-0 dark:text-zinc-200">reference note</p>
  
      <div className="color-square rounded inline-block ring-offset-2 ring-zinc-400 ring-1 dark:ring-violet-500 dark:ring-2 dark:ring-offset-zinc-700" style={{ backgroundColor: '#c4b5fd', width: '16px', height: '16px' }}></div>
      <p className="text-xs md:w-fit md:h-fit px-3 mb-2 md:mb-0 inline-block truncate pt-2 md:py-0 dark:text-zinc-200">daily note</p>
    </div>
  );
  

  return (
    <><div className="">{bottomHeader}</div><div className="grid grid-cols-1 gap-4 bg-zinc-700 rounded-md shadow-lg dark:bg-neutral-900">{postPreviews}</div></>
  );
};

export default HomePage;