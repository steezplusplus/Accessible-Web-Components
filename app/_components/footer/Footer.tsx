import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const LinkedInURL = 'https://www.linkedin.com/in/jesse-bp/';
const GithubURL = 'https://github.com/steezplusplus';

export function Footer() {
  return (
    <ul className="flex h-full flex-col items-center justify-center px-4 text-sm sm:flex-row sm:justify-between sm:px-6 lg:px-8">
      <li>
        <p>
          &copy; {new Date().getFullYear()} Accessible Web Components. <i>Supporting resources to make the web accessible</i>.
        </p>
      </li>
      <li className="ml-auto mr-2">
        <p className="flex items-center gap-x-1 text-xs hover:underline">
          <FontAwesomeIcon icon={faLinkedin} />
          <Link href={LinkedInURL}>LinkedIn</Link>
        </p>
      </li>
      <li>
        <p className="flex items-center gap-x-1 text-xs hover:underline">
          <FontAwesomeIcon icon={faGithub} />
          <Link href={GithubURL}>Github</Link>
        </p>
      </li>
    </ul>
  );
}