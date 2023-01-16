import Link from 'next/link';

import Button from './Button';

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-[60ch] text-center">
      <h1 className="mb-2 text-3xl leading-none sm:text-5xl">
        <div className="text-xl leading-none sm:text-3xl sm:leading-none">
          Hi There!
        </div>{' '}
        I'm Tomas Carignano
      </h1>
      <p className="mb-5">
        And I <em className="font-bold not-italic">love</em> solving business
        problems through the magic of code.
      </p>
      <Link href="/#about">
        <Button>Read More</Button>
      </Link>
    </section>
  );
}
