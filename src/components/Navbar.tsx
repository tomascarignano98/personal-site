import Link from 'next/link';

import NavLink from '@/components/NavLink';

export default function Navbar() {
  return (
    <header className="border-b print:hidden">
      <div className="mx-auto max-w-screen-lg px-2">
        <nav className="flex items-center justify-between py-2 [&_a]:outline-offset-4">
          <HomeLink />

          <ul className="flex items-center justify-between gap-x-3 sm:gap-x-8">
            <NavLink href="/#about-me">About</NavLink>
            <NavLink href="/#projects">Projects</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
            <ResumeLink />
          </ul>
        </nav>
      </div>
    </header>
  );
}

function HomeLink() {
  return (
    <Link href="/" className="mt-1 font-mono font-light text-primaryHover">
      TOMAS
    </Link>
  );
}

function ResumeLink() {
  return (
    <li>
      <a
        href="/resume.pdf"
        target="_blank"
        onMouseDown={(e) => e.preventDefault()}
        className="font-medium hover:text-primary"
      >
        Resume
      </a>
    </li>
  );
}
