import { Article } from "./_components/article/Article";
import { BlogPost, getBlogPosts } from "./_api/api";

export default async function Blog() {
  const blogPosts: BlogPost = await getBlogPosts();
  const { data: blogPostsData } = blogPosts;

  return (
    <div className="flex flex-col gap-y-2">
      <section className="container m-auto">
        <h1 className="text-4xl">Learn development with these articles.</h1>
        <h2 className="text-2xl">Here you will find my latest writing.</h2>
      </section>

      <section className="container m-auto">
        <p className="text-lg">Search blog by tags</p>
        <div className="flex gap-x-8">
          <label>
            <span className="mr-1">Tag 1</span>
            <input type="checkbox" />
          </label>
          <label>
            <span className="mr-1">Tag 2</span>
            <input type="checkbox" />
          </label>
          <label>
            <span className="mr-1">Tag 3</span>
            <input type="checkbox" />
          </label>
        </div>
      </section>

      <section className="container m-auto grid grid-cols-3 gap-2">
        {blogPostsData.map((blogPost, i: number) => {
          const { title, tags, summary  } = blogPost;
          return <Article key={`${title}-${i}`} title={title} tags={tags} summary={summary} />
        })}
      </section>
    </div>
  );
}
