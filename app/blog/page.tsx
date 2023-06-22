import { Article } from "./_components/article/Article";
import { BlogPost, getBlogPosts } from "./_api/api";

export default async function Blog() {
  const blogPosts: BlogPost = await getBlogPosts();
  const { data: blogPostsData } = blogPosts;

  const tagNames = blogPostsData.map((blogPost) => blogPost.tags.map((tag) => tag.name)).flat();
  const uniqueTagNames = [...new Set(tagNames)];

  return (
    <div className="flex flex-col gap-y-2">
      <section className="container m-auto">
        <h1 className="text-4xl">Learn development with these articles.</h1>
        <h2 className="text-2xl">Here you will find my latest writing.</h2>
      </section>

      <section className="container m-auto">
        <fieldset className="flex gap-x-8">
          <legend>Search by tags:</legend>
          {uniqueTagNames.map((tagName, i) => {
            return (
              <label key={`${tagName}-${i}`}>
                <span className="mr-1">{tagName}</span>
                <input type="checkbox" />
              </label>
            );
          })}
        </fieldset>
      </section>

      <section className="container m-auto grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPostsData.map((blogPost, i: number) => {
          const { title, tags, summary, slug } = blogPost;
          return <Article key={`${title}-${i}`} title={title} slug={slug} tags={tags} summary={summary} />;
        })}
      </section>
    </div>
  );
}
