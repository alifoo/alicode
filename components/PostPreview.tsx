import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="grid grid-cols-1 border hover:bg-zinc-100 border-zinc-300 rounded-md shadow-md bg-white p-2">
      <div className="col-span-1 flex items-center space-x-2">
        <Link href={`/posts/${props.slug}`}>
          <h2 className="font-bold text-zinc-600 hover:underline text text-sm truncate w-56">
            {props.title}
          </h2>
        </Link>
        <p className="text-xs text-zinc-600 truncate w-80 h-4">
          {props.subtitle}
        </p>
        <p className="text-xs text-zinc-400 truncate w-20 h-4">
          {props.date}
        </p>
        <div
          className="color-square rounded"
          style={{ backgroundColor: props.color, width: '12px', height: '12px' }}
        ></div>
      </div>
    </div>
  );
};

export default PostPreview;