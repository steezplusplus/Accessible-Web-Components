import { BlogPost, getBlogPosts } from "../_api/api";

export type BlogPostParams = {
  params: { slug: string }
};

// TODO Typography? Maybe use the tailwind plugin: https://tailwindcss.com/docs/typography-plugin
export default async function BlogPostPage({ params }: BlogPostParams) {
  const blogPosts: BlogPost = await getBlogPosts();
  const { data: blogPostsData } = blogPosts;
  const blogPost = blogPostsData.find((blogPosts) => blogPosts.slug === params.slug);

  if (!blogPost) {
    return (
      <div>No blog post found.</div>
    );
  }

  const { title, body } = blogPost;
  return (
    <div>
      <h1 className="text-4xl">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </div>
  );
}