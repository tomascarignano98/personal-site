import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-[55ch] pt-20 md:max-w-none">
      <h2 className="text-center md:text-left">About Me</h2>

      <div className="flex flex-col gap-y-4 gap-x-10 md:flex-row">
        <div className="max-w-[55ch] text-justify [&>p]:mb-3">
          <p>
            I'm a self-taught web developer who made an early switch from
            Finance in <time dateTime="2021-05-01">2021</time>. So far, I have
            zero regrets and would like to explore the tech space even more!
          </p>
          <p>
            Although I'm the son of two computer scientists, I only took an
            interest in programming in{' '}
            <time dateTime="2020-11-01">late 2020</time>. At the time, my
            aspiration was to work in the financial markets sector, so I started
            learning Python; I was particularly interested in Data Science.
          </p>
          <p>
            After some time discovering all the amazing things you can do with
            code, I became more interested in building stuff rather than
            analyzing stuff, so much so that I decided to take the risk of
            deviating from Finance and learning Web Development. My dad owns a
            small software agency, so at least I knew I'd have the chance of
            giving it a try in the real world.
          </p>
          <p>
            <time dateTime="2023-02-01">Today</time>, I'm happy to say it all
            turned out well: I contributed to existing projects, built others
            from scratch, worked with clients, and collaborated with a senior
            engineer. <Link href="/#projects">Check out some of my work.</Link>
          </p>
          <p>
            I'm currently looking for a new role, ideally full of challenges and
            learning opportunities, so feel free to{' '}
            <Link href="/#contact">contact me.</Link>
          </p>
        </div>

        <div>
          <div className="flex flex-col items-center rounded-lg border py-4 shadow-md md:px-16">
            <h3>Main Tech</h3>
            <ul className="columns-2 gap-x-8 sm:text-base">
              <ListItem text="JavaScript" />
              <ListItem text="TypeScript" />
              <ListItem text="HTML/CSS" />
              <ListItem text="React" />
              <ListItem text="Next.js" />
              <ListItem text="Firebase" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-x-1">
      <CheckIcon /> {text}
    </li>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
      />
    </svg>
  );
}
