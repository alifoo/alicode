import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="my-12 mx-2">
        <h1 className="text-4xl text-zinc-700 font-bold dark:text-violet-600">{post.data.title}</h1>
        <p className="text-zinc-400 py-4">{post.data.date}</p>
        <p className="text-zinc-500 pb-4">{post.data.subtitle}</p>
      </div>

      <article className="prose mx-2 p-2 bg-neutral-400 rounded-md">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>

  );
};

export default PostPage;
