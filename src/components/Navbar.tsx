import Link from 'next/link';

import NavLink from '@/components/NavLink';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 animate-fadeIn border-b bg-white/[0.96] backdrop-blur-sm print:hidden">
      <div className="mx-auto max-w-screen-lg px-2">
        <nav className="flex items-center justify-between py-2 sm:text-base">
          <HomeLink />

          <ul className="flex items-center justify-between gap-x-3 font-medium sm:gap-x-8">
            <NavLink href="/#about">About</NavLink>
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
      <a href="/resume.pdf" target="_blank" className="hover:text-primary">
        Resume
      </a>
    </li>
  );
}
