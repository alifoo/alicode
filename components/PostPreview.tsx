import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return <div className="border hover:bg-zinc-100 border-zinc-100 p-3 rounded-r-lg shadow-md bg-white">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold text-zinc-600 hover:underline text-4x1">{props.title}</h2>
      </Link>
      <p className="text-xs text-zinc-600">{props.subtitle}</p>
      <p className="text-xs text-zinc-400">{props.date}</p>
    </div>
};

export default PostPreview;