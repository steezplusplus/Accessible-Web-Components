export type BlogPostParams = {
  params: { slug: string }
};

// TODO Typography? Maybe use the tailwind plugin: https://tailwindcss.com/docs/typography-plugin
export default async function BlogPostPage({ params }: BlogPostParams) {
  return (
    <p>placeholder: {params.slug}</p>
  );
}