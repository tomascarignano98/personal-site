import Image from 'next/image';

import ExternalLink from '@/components/ExternalLink';
import SEO from '@/components/SEO';
import TechStackList from '@/components/TechStackList';

import APIImg from '/public/doroteas/api.png';
import LoginPageImg from '/public/doroteas/login.png';
import MainPageImg from '/public/doroteas/main-page.png';

export default function DoroteasPage() {
  return (
    <>
      <SEO title="Projects | Doroteas" />

      <h1 className="mb-4 sm:text-4xl">Doroteas</h1>
      <p className="mb-2 max-w-[70ch]">
        Doroteas is a web application for "Hermanas Doroteas", a nuns
        congregation that, among other things, runs 4 educational institutions
        of all levels.
      </p>
      <p>
        <span className="font-semibold">Type:</span> Work
      </p>
      <TechStackList techStack={techStack} />

      <section aria-labelledby="motivation" className="mt-14 [&>p]:mt-3">
        <h2 id="motivation" className="mb-3 text-2xl">
          Motivation
        </h2>
        <p>
          The entire application revolves around managing the students financial
          status, i.e., tracking tuition fees, and this project emerged from 3
          main problems:
        </p>
        <ul className="list-disc pl-10">
          <li>
            <span className="font-semibold">Updating students status.</span>{' '}
            Their database was a collection of excel tables that they had to
            keep updated (by hand) as payment statements came every weekday from
            the municipal bank.
          </li>
          <li>
            <span className="font-semibold">Data decentralization.</span> Being
            a group managing multiple schools, every time a school wanted to
            check a student's status they had to phone administration, hence the
            data flow was extremely slow.
          </li>
          <li>
            <span className="font-semibold">Emitting coupons.</span> They used
            to give tutors a coupon book in order for them to pay the tuition
            fees, which represents an environmental and administrative issue.
          </li>
        </ul>
        <p>
          I accepted to build this project mainly because, for the first time in
          my fresh developer career, I was about to embark on a non-trivial
          enterprise. So, I guess I saw it as a big enough challenge for me to
          see if I could make it as a developer. Apart from that, I felt quite
          inspired by helping a group of schools better serve their students.
        </p>
        <p>
          In the beginning, I was exclusively doing development, while my dad
          was doing project management. I had to collaborate closely with him in
          order to understand the main requirements and business problems we
          needed to solve. Then, with time, I also took ownership of the
          product, and started dealing with the client directly.
        </p>
      </section>

      <section aria-labelledby="core-features" className="mt-14">
        <h2 id="core-features" className="mb-8 text-2xl">
          Core Features
        </h2>

        <article className="mb-20 grid justify-center gap-8 sm:grid-cols-2">
          <ExternalLink
            href="/doroteas/login.png"
            className="flex-grow overflow-hidden rounded-md shadow-lg transition hover:scale-105"
          >
            <Image
              src={LoginPageImg}
              alt="Login page screenshot."
              placeholder="blur"
              className="max-h-80 w-full object-cover object-center"
            />
          </ExternalLink>

          <div className="text-center">
            <h3>User Authentication & Authorization</h3>
            <p className="max-w-[50ch]">
              Users need to authenticate themselves in order to use the app.
              Each school and the accounting team have a separate user account
              with different permissions, for example, a school can only enroll
              a student in their own school, or only users with admin privileges
              can access certain pages and functionalities.
            </p>
          </div>
        </article>

        <article className="mb-20 grid justify-center gap-8 sm:grid-cols-2">
          <div className="text-center">
            <h3>Main Page</h3>
            <p className="max-w-[50ch]">
              Here, any user can query the financial status of a student, thanks
              to having a centralized database. Additionally, admins can do all
              sorts of things here, such as grant/withdraw a scholarship,
              refinance an indebted student, and more.
            </p>
          </div>

          <ExternalLink
            href="/doroteas/main-page.png"
            className="flex-grow overflow-hidden rounded-md shadow-lg transition hover:scale-105"
          >
            <Image
              src={MainPageImg}
              alt="Main page screenshot."
              placeholder="blur"
              className="max-h-80 w-full object-cover object-top"
            />
          </ExternalLink>
        </article>

        <article className="mb-20 grid justify-center gap-8 sm:grid-cols-2">
          <ExternalLink
            href="/doroteas/api.png"
            className="flex-grow overflow-hidden rounded-md shadow-lg transition hover:scale-105"
          >
            <Image
              src={APIImg}
              alt="Cloud Functions for Firebase usage screenshot"
              placeholder="blur"
              className="max-h-80 w-full object-cover object-top"
            />
          </ExternalLink>

          <div className="text-center">
            <h3>REST API</h3>
            <p className="max-w-[50ch]">
              This API essentially allow schools to charge their tuition fees
              through the municipal bank. All a student/tutor needs now is the
              student's ID number, instead of a coupon.
            </p>
          </div>
        </article>
      </section>

      <section aria-labelledby="lessons" className="mt-20 [&>p]:mt-3">
        <h2 id="lessons" className="mb-3 text-2xl">
          Challenges & Lessons
        </h2>
        <p>
          One of the hardest parts for me was the database design. I was still a
          beginner (never built something this big), and I needed to find a
          balance between cost and code complexity. Today, I think I can
          summarize the process of getting unstuck in two general steps: first,
          have a very clear picture about what you're trying to achieve; and
          second, google the heck out of it. In this particular case, the way I
          overcame this challenge was by watching <CloudFirestorePlaylist />,
          and reading the official docs. Firebase documentation is one of my
          favorite parts about the product.
        </p>
        <p>
          The benefits I reaped trough this project are priceless! I became more
          confident with the technologies I use, I learned how to manage tight
          deadlines, I got over perfectionism, I became a lot better at
          communicating with clients and managing projects, and it made me
          considerably more comfortable at facing challenges I don't know the
          answer yet.
        </p>
      </section>
    </>
  );
}

const techStack = [
  { title: 'Next.js', href: 'https://nextjs.org/' },
  { title: 'React', href: 'https://reactjs.org/' },
  { title: 'TypeScript', href: 'https://www.typescriptlang.org/' },
  { title: 'Tailwind CSS', href: 'https://www.tailwindcss.com/' },
  {
    title: 'Firebase Authentication',
    href: 'https://firebase.google.com/docs/auth'
  },
  {
    title: 'Cloud Firestore',
    href: 'https://firebase.google.com/docs/firestore'
  },
  {
    title: 'Cloud Functions for Firebase',
    href: 'https://firebase.google.com/docs/functions'
  },
  { title: 'Jest', href: 'https://jestjs.io/' }
];

function CloudFirestorePlaylist() {
  return (
    <ExternalLink href="https://www.youtube.com/playlist?list=PLl-K7zZEsYLluG5MCVEzXAQ7ACZBCuZgZ">
      an official YouTube playlist about Cloud Firestore
    </ExternalLink>
  );
}
