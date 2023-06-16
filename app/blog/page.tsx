import { Article } from "./_components/article/Article";
import { BlogPost, getBlogPosts } from "./_api/api";

export default async function Blog() {
  const blogPosts: BlogPost = await getBlogPosts();
  const { data: blogPostsData } = blogPosts;

  return (
    <>
    {blogPostsData.map((blogPost: any, i: number) => {
      const { title } = blogPost;
      return <Article key={`${title}-${i}`} title={title} />
    })}
    </>
  );
}
