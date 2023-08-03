import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const LinkedInURL = 'https://www.linkedin.com/in/jesse-bp/';
const GithubURL = 'https://github.com/steezplusplus';

export function Footer() {
  return (
    <div className="flex h-full bg-gradient-to-r from-emerald-900 to-emerald-500">
      <ul className="flex h-full flex-col p-1 text-xs text-white">
        <li>
          <p>
            &copy; {new Date().getFullYear()} Accessible Web Components
          </p>
        </li>
        <li>
          <p>
            <i>Supporting resources to make the web accessible</i>
          </p>
        </li>
      </ul>

      <ul className="ml-auto flex items-center gap-x-4 pr-2 text-white">
        <li>
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
    </div >
  );
}