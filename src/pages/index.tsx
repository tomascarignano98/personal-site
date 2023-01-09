import React from 'react';

import Button from '@/components/Button';
import SEO from '@/components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO title="Tomas Carignano" />

      <p>Hi there!</p>
      <h1 className="print:hidden">
        I&apos;m Tomas Carignano. <br />A Web Developer.
      </h1>
      <Button>Get In Touch</Button>
      <br />
      <br />
      <br />

      <h2>About Me</h2>
      <p>{`I'm a curious person who likes to solve business problems through the magic of code.`}</p>

      <br />
      <br />

      <h2>Projects</h2>
      <p>{`Here's a list of my best work`}</p>
    </>
  );
}
