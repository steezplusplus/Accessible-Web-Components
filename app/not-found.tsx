import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="prose mx-auto mt-8 flex flex-col items-center justify-center prose-a:text-blue-800">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href="/">Homepage</Link>
      </p>
    </div>
  );
}