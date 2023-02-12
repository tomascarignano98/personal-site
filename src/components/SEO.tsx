import Head from 'next/head';

interface ComponentProps {
  title: string;
}

export default function SEO({ title }: ComponentProps) {
  const description = 'Tomas Carignano Aznarez.';
  const url = 'https://www.tomascarignano.com/';
  const imgUrl = url + 'profile.jpg';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imgUrl} />
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl} />
    </Head>
  );
}
