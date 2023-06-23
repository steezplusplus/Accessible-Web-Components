import { Article } from "./_components/article/Article";
import { BlogPost, getBlogPosts } from "./_api/api";

export default async function Blog() {
  const blogPosts: BlogPost = await getBlogPosts();
  const { data: blogPostsData } = blogPosts;

  const tagNames = blogPostsData.map((blogPost) => blogPost.tags.map((tag) => tag.name)).flat();
  const uniqueTagNames = [...new Set(tagNames)];

  return (
    <div>
      <header className="bg-gradient-to-r from-amber-500 to-pink-500">
        <ul className="flex flex-col gap-y-8 p-8">
          <li>
            <h1 className="text-7xl text-white">Learn development with these articles</h1>
          </li>
          <li>
            <h2 className="text-2xl text-white">Some other bullshit...</h2>
          </li>
        </ul>
      </header>

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
