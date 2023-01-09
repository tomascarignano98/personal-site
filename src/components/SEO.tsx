import Head from 'next/head';

interface ComponentProps {
  title: string;
}

export default function SEO({ title }: ComponentProps) {
  const description =
    'Tomas Carignano is a Software Developer based in Denmark.';
  const url = 'https://www.tomascarignano.com/vercel.svg';
  const logoUrl = url + 'vercel.svg';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={logoUrl} />
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logoUrl} />
    </Head>
  );
}
