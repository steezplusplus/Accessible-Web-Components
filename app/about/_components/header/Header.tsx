export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-indigo-900">
      <div className="flex flex-col gap-y-2 p-8">
        <h2 className="text-7xl leading-tight text-white">
          About the project
        </h2>
        <p className="text-white">In question-answer format</p>
      </div>
    </header>
  );
}