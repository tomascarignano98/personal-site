import Image from 'next/image';

import ExternalLink from '@/components/ExternalLink';
import SEO from '@/components/SEO';
import TechStackList from '@/components/TechStackList';

import PassportBotImg from '/public/passport-bot-1000.jpg';

export default function PassportBotPage() {
  return (
    <>
      <SEO title="Projects | Passport Bot" />

      <h1 className="mb-4 sm:text-4xl">Passport Bot</h1>
      <p className="mb-2 max-w-[70ch]">
        Passport Bot is a little program I wrote to get myself an appointment at
        the Spanish Consulate of Cordoba, Argentina.
      </p>
      <p>
        <span className="font-semibold">Type:</span> Personal Project
      </p>
      <TechStackList techStack={techStack} />

      <section aria-labelledby="motivation" className="mt-14">
        <h2 id="motivation" className="mb-3 text-2xl">
          Motivation
        </h2>
        <p className="mb-3">
          The project came to be as a solution to a niche problem in my life: we
          were in the middle of the pandemic, and getting an appointment for
          renewing my Spanish passport was virtually impossible; the website
          would provide new slots on specific days at 00:00, and every time I
          tried to fill a spot, I would get a popup saying it was already taken.
          This happened to me around 4 times before I realized it was a speed
          problem, so I decided to solve it with code. This was important for me
          because I was planning to move to Europe the following year.
        </p>
        <p>
          The expected outcome was that the bot would open the browser, go to
          the site, pick a free spot, and fill out the forms. All done at
          computer speed, rather than human speed.
        </p>
      </section>

      <section aria-labelledby="process" className="mt-14">
        <h2 id="process" className="mb-3 text-2xl">
          Process
        </h2>

        <p className="mb-4">
          I started with repeating the task manually, but this time around,
          copying the entire HTML content of every page with the use of{' '}
          <ChromeDevToolsLink />. After that, I recreated the website in my
          computer and then coded the script with the help of this mocked
          version of the website. Finally, I added the real url, waited for the
          next opportunity, and voilà.
        </p>
        <Image
          src={PassportBotImg}
          alt="final outcome of the operation"
          placeholder="blur"
          className="rounded-md"
        />
      </section>
    </>
  );
}

const techStack = [
  { title: 'Node.js', href: 'https://nodejs.org/en/about/' },
  { title: 'Puppeteer', href: 'https://pptr.dev/' }
];

function ChromeDevToolsLink() {
  return (
    <ExternalLink href="https://developer.chrome.com/docs/devtools/">
      Chrome DevTools
    </ExternalLink>
  );
}
