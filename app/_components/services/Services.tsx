'use client';

// TODO Component composition
export function Services() {
  return (
    <section>
      <div className="mb-10 flex flex-col items-center justify-center">
        <h3 className="text-xl font-bold tracking-widest">How I&apos;m here to help you</h3>
      </div>

      <ul className="grid gap-y-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <li className="flex flex-col items-center justify-center">
          <div className="mb-2 h-24 w-24 bg-emerald-500" />
          Audit & Optimize
        </li>
        <li className="flex flex-col items-center justify-center">
          <div className="mb-2 h-24 w-24 bg-emerald-500" />
          Build on your foundation
        </li>
        <li className="flex flex-col items-center justify-center">
          <div className="mb-2 h-24 w-24 bg-emerald-500" />
          Achieve WCAG 2.1 Compliance
        </li>
        <li className="flex flex-col items-center justify-center">
          <div className="mb-2 h-24 w-24 bg-emerald-500" />
          Simplify SDLC with automation
        </li>
        <li className="flex flex-col items-center justify-center">
          <div className="mb-2 h-24 w-24 bg-emerald-500" />
          Deliver accessability by default
        </li>
        <li className="flex flex-col items-center justify-center">
          <div className="mb-2 h-24 w-24 bg-emerald-500" />
          Focus on beautiful UI
        </li>
      </ul>
    </section>
  );
}