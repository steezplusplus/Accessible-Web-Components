import { Article } from "./_components/article/Article";
import { BlogPost, getBlogPosts } from "./_api/api";

export default async function Blog() {
  const blogPosts: BlogPost = await getBlogPosts();
  const { data: blogPostsData } = blogPosts;

  return (
    <>
    {blogPostsData.map((blogPost, i: number) => {
      const { title, tags, summary  } = blogPost;
      return <Article key={`${title}-${i}`} title={title} tags={tags} summary={summary} />
    })}
    </>
  );
}
