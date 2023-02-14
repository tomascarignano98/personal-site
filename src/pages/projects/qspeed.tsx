import Image from 'next/image';

import ExternalLink from '@/components/ExternalLink';
import SEO from '@/components/SEO';
import TechStackList from '@/components/TechStackList';

import APIImg from '/public/qspeed/api.png';
import WebsiteImg from '/public/qspeed/website.png';
import WindowsAppImg from '/public/qspeed/windows-app.jpeg';

export default function QspeedPage() {
  return (
    <>
      <SEO title="Projects | Qspeed" />

      <h1 className="mb-4 sm:text-4xl">Qspeed</h1>
      <p className="mb-2 max-w-[70ch]">
        Qspeed is a product conceived as a race timing solution, and it consists
        of a windows app, a <RESTAPIDefinition />, and a website.
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
          The project originated as a custom solution for a client: he had a
          business around timing MTB races and owned the necessary{' '}
          <TimingDeviceLink text="equipment" />, but he wished to have a program
          on top of it so he could perform tasks such as registering
          competitors, creating different type of races, compute the ranking,
          etc.
        </p>
        <p>
          I chose to participate in this project because it represented an
          opportunity for me to work with backend code using the{' '}
          <ServerlessDefinition /> architecture, something I wished to do more.
          This was also exciting for me because I love this type of environment:
          healthy, passionate, fun; and this makes me feel inspired.
        </p>
        <p>
          The team was me and my dad, and my role was to provide a way to
          persist the local data from the windows app into the cloud, and to
          display this information on a page accessible through a QR code.
          Collaboration was necessary in order to define what data was going to
          be displayed on the website, and to design the API that was going to
          talk with his windows app.
        </p>
      </section>

      <section aria-labelledby="core-elements" className="mt-14">
        <h2 id="core-elements" className="mb-8 text-2xl">
          Core Elements
        </h2>

        <article className="mb-20 grid justify-center gap-8 sm:grid-cols-2">
          <ExternalLink
            href="/qspeed/windows-app.jpeg"
            className="flex-grow overflow-hidden rounded-md shadow-lg transition hover:scale-105"
          >
            <Image
              src={WindowsAppImg}
              alt="A screenshot of the windows app."
              placeholder="blur"
              className="max-h-80 w-full object-cover object-top"
            />
          </ExternalLink>

          <div className="text-center">
            <h3>Windows App</h3>
            <p className="max-w-[50ch]">
              The Windows app communicates with{' '}
              <TimingDeviceLink text="a timing device" /> via{' '}
              <TCPIPDefinition />. This device reads the signal of a chip as it
              crosses an antenna, and it transmits the signal to the app. This
              signal is then used by the app to compute the ranking.
            </p>
          </div>
        </article>

        <article className="mb-20 grid justify-center gap-8 sm:grid-cols-2">
          <div className="text-center">
            <h3>REST API</h3>
            <p className="max-w-[50ch]">
              The API acts as an intermediary layer that processes data
              transfers between the windows app and the website. In other words,
              it receives the data, validates it using the <ZodLink /> library,
              and stores it in <CloudFirestoreLink />. Finally, the website
              fetches it from Firestore.
            </p>
          </div>

          <ExternalLink
            href="/qspeed/api.png"
            className="flex-grow overflow-hidden rounded-md shadow-lg transition hover:scale-105"
          >
            <Image
              src={APIImg}
              alt="The API's source code."
              placeholder="blur"
              className="max-h-80 w-full object-cover object-top"
            />
          </ExternalLink>
        </article>

        <article className="grid justify-center gap-8 sm:grid-cols-2">
          <ExternalLink
            href="/qspeed/website.png"
            className="flex-grow overflow-hidden rounded-md shadow-lg transition hover:scale-105"
          >
            <Image
              src={WebsiteImg}
              alt="Race page screenshot."
              placeholder="blur"
              className="max-h-80 w-full object-cover object-top"
            />
          </ExternalLink>

          <div className="text-center">
            <h3>Website</h3>
            <p className="max-w-[50ch]">
              The website is responsible for displaying the ranking of a given
              race, filtered by category. This information is updated in
              real-time, so you don't have to refresh the page to get the latest
              data. Another cool feature is that every race has its own page,
              which is generated <DynamicRoutesLink /> when a new race is added
              to the database.
            </p>
          </div>
        </article>
      </section>

      <section aria-labelledby="lessons" className="mt-20 [&>p]:mt-3">
        <h2 id="lessons" className="mb-3 text-2xl">
          Challenges & Lessons
        </h2>
        <p>
          One particular obstacle I faced was when developing the API. My
          initial plan was to simply create a separate <HTTPFunctionLink /> for
          each API endpoint, since I thought that was going to be the simplest
          way to do it, but then I started noticing friction when doing certain
          things, for example validating the HTTP request. After googling and
          reading documentation, I came across a code example that was passing a
          full Express app to a HTTP function. Although now it makes absolute
          sense, I didn't expect this to be possible; it felt so powerful, and
          ended up being so.
        </p>
        <p>
          Thanks to this project, I gained a deeper understanding of serverless
          functions using Firebase, I learned how to build a full-blown Express
          app, and I came to appreciate how many ways to protect an API there
          are. At the end of the day, this project motivated me to always make
          sure data is coming in the shape I expect it to, whether I'm working
          on the backend or the frontend.
        </p>
      </section>
    </>
  );
}

const techStack = [
  { title: 'GeneXus', href: 'https://www.genexus.com/en/products/genexus' },
  { title: 'Next.js', href: 'https://nextjs.org/' },
  { title: 'React', href: 'https://reactjs.org/' },
  { title: 'TypeScript', href: 'https://www.typescriptlang.org/' },
  { title: 'Tailwind CSS', href: 'https://www.tailwindcss.com/' },

  {
    title: 'Cloud Firestore',
    href: 'https://firebase.google.com/docs/firestore'
  },
  {
    title: 'Cloud Functions for Firebase',
    href: 'https://firebase.google.com/docs/functions'
  },
  {
    title: 'Express',
    href: 'https://expressjs.com/'
  },
  { title: 'Jest', href: 'https://jestjs.io/' }
];

function RESTAPIDefinition() {
  return (
    <ExternalLink href="https://aws.amazon.com/what-is/restful-api/">
      REST API
    </ExternalLink>
  );
}

function ServerlessDefinition() {
  return (
    <ExternalLink href="https://en.wikipedia.org/wiki/Serverless_computing">
      serverless
    </ExternalLink>
  );
}

function ZodLink() {
  return (
    <ExternalLink href="https://zod.dev/?id=introduction">Zod</ExternalLink>
  );
}

function CloudFirestoreLink() {
  return (
    <ExternalLink href="https://firebase.google.com/docs/firestore">
      Cloud Firestore
    </ExternalLink>
  );
}

function DynamicRoutesLink() {
  return (
    <ExternalLink href="https://nextjs.org/docs/basic-features/data-fetching/get-static-paths">
      dynamically
    </ExternalLink>
  );
}

function TCPIPDefinition() {
  return (
    <ExternalLink href="https://en.wikipedia.org/wiki/Transmission_Control_Protocol">
      TCP/IP
    </ExternalLink>
  );
}

function TimingDeviceLink({ text }: { text: string }) {
  return (
    <ExternalLink href="https://macsha.business.site/?hl=en">
      {text}
    </ExternalLink>
  );
}

function HTTPFunctionLink() {
  return (
    <ExternalLink href="https://firebase.google.com/docs/functions/http-events">
      HTTP function
    </ExternalLink>
  );
}
