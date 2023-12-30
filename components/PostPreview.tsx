import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="grid grid-cols-1 group border hover:bg-zinc-100 border-zinc-300 rounded-md shadow-md bg-white p-2 ring-offset-2 ring-zinc-600 ring-2 transition-height duration-500 delay-300 ease-in-out h-9 hover:h-20">
      <div className="col-span-1 flex items-center space-x-2">
        <Link href={`/posts/${props.slug}`}>
          <h2 className="font-bold text-zinc-600 truncate group-hover:whitespace-normal transition-height duration-1000 delay-500 ease-in-out h-5 group-hover:h-12 hover:underline text-sm w-56 max-w-64">
            {props.title}
          </h2>
        </Link>
        <p className="text-xs text-zinc-600 w-72 truncate group-hover:whitespace-normal transition-height duration-1000 delay-500 ease-in-out h-4 group-hover:h-12">
          {props.subtitle}
        </p>
        <p className="text-xs text-zinc-400 w-fit pr-4 truncate group-hover:whitespace-normal transition-height duration-1000 delay-500 ease-in-out h-5 group-hover:h-12">
          {props.date}
        </p>
        <div
          className="color-square rounded h-5 ring-offset-2 ring-zinc-400 ring-1"
          style={{ backgroundColor: props.color, width: '12px', height: '12px' }}
        ></div>
      </div>
    </div>
  );
};

export default PostPreview;