const BUTTERCMS_TOKEN = process.env.NEXT_PUBLIC_BUTTERCMS_TOKEN || '';

export type BlogPost = {
  meta: BlogPostMeta;
  data: BlogPostData[];
}

export type BlogPostData = {
  status:             string;
  created:            Date;
  updated:            Date;
  published:          Date;
  title:              string;
  slug:               string;
  body:               string;
  summary:            string;
  seo_title:          string;
  meta_description:   string;
  featured_image_alt: string;
  url:                string;
  featured_image:     null | string;
  author:             BlogPostAuthor;
  tags:               BlogPostCategory[];
  categories:         BlogPostCategory[];
}

export type BlogPostAuthor = {
  bio:            string;
  slug:           string;
  email:          string;
  title:          string;
  last_name:      string;
  first_name:     string;
  facebook_url:   string;
  linkedin_url:   string;
  instagram_url:  string;
  pinterest_url:  string;
  profile_image:  string;
  twitter_handle: string;
}

export type BlogPostCategory = {
  name: string;
  slug: string;
}

export type BlogPostMeta = {
  next_page:     null;
  previous_page: null;
  count:         number;
}


export async function getBlogPosts() {
  const res = await fetch(`https://api.buttercms.com/v2/posts/?auth_token=${BUTTERCMS_TOKEN}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const json = await res.json();
  return json;
}