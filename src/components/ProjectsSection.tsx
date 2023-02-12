import Link from 'next/link';

import Button from './Button';

export default function ProjectsSection() {
  return (
    <section id="projects" className="pt-20">
      <h2 className="mb-8 text-center lg:text-left">Projects</h2>
      <div className="mx-auto flex flex-col justify-between gap-y-6 gap-x-3 lg:flex-row">
        <ProjectCard
          title="Qspeed"
          description="A multilayered product to time mountain bike races."
          href="/projects/qspeed"
          src="qspeed.png"
        />
        <ProjectCard
          title="Doroteas"
          description="A full-stack web app to help a group of schools manage their students financially."
          href="/projects/doroteas"
          src="doroteas.png"
        />
        <ProjectCard
          title="Passport Bot"
          description="A browser automation script to book an appointment at the Spanish consulate."
          href="/projects/passport-bot"
          src="passport-bot.jpg"
        />
      </div>
    </section>
  );
}

interface ProjectProps {
  title: string;
  description: string;
  href: string;
  src: string;
}
function ProjectCard({ title, description, href, src }: ProjectProps) {
  return (
    <article className="mx-auto flex w-80 flex-col justify-between overflow-hidden rounded-lg border border-gray-200 pb-5 text-center transition-transform duration-300 lg:hover:scale-105">
      <header className="w-full">
        <img
          src={src}
          className="mb-5 h-44 w-full object-cover object-top"
          alt={title + ' project'}
        />
        <h3 className="mb-2">{title}</h3>
      </header>
      <main className="mb-3 px-3">
        <p className="sm:text-base">{description}</p>
      </main>
      <footer className="mt-auto">
        <Link href={href}>
          <Button>See Project</Button>
        </Link>
      </footer>
    </article>
  );
}
