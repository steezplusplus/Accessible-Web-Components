import Link from 'next/link';

const webAimURL = 'https://webaim.org/projects/million/#wcag';
const LinkedInURL = 'https://www.linkedin.com/in/jesse-bp/';
const ariaApgURL = 'https://www.w3.org/WAI/ARIA/apg/patterns/';
const openUiURL = 'https://open-ui.org/';

export function About() {
  return (
    <article className="prose mx-auto my-8 sm:prose-sm md:prose-base lg:prose-lg xl:prose-xl">
      <h2>What is Accessible Web Components?</h2>
      <p>
        A blog trying to make web accessability become more accessible knowledge.
      </p>

      <h2>Why?</h2>
      <p>
        According to a <Link href={webAimURL}>2023 report by WebAIM</Link>, the accessibility of the internet for individuals with disabilities stands at a mere 3.7%.
        While the a11y community has made great strides in the recent years, adoption is slow for many reasons.
        In particular, lack of awareness of WCAG and ADA is low across the software industry.
      </p>
      <p>
        In addition to this, some people perceive accessibility as a complex and daunting task.
        This misconception arises from a lack of definitive and information rich resources for people learn.
        As of late, <Link href={ariaApgURL}>Aria APG</Link> and <Link href={openUiURL}>OpenUI</Link> have made amazing strides in educating best practices for a11y.
      </p>
      <p>
        This website serves as my humble contribution to the web development community, and to express gratitude towards those who have taught me invaluable lessons.
        It is my hope that my blog posts can help simplify the mental modal required for building accessible UI, while using OpenUI and Aria APG as my resources.
      </p>

      <h2>Who are you?</h2>
      <p>
        I&apos;m Jesse, a software engineer.
      </p>
      <p>
        Feel free to contact me on <Link href={LinkedInURL}>LinkedIn</Link>.
      </p>
    </article >
  );
}