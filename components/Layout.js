import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children, meta: pageMeta }) {
  const meta = {
    title: 'Next.js Multiple Domains',
    description:
      'Demonstration of using server-rendering with multiple hosts, but still serving static content using stale-while-revalidate.',
    cardImage:
      'https://og-image.now.sh/Next.js%20**Multiple%20Domains**.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg',
    ...pageMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Next.js Multiple Domains" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <nav>
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="flex justify-between items-center p-8 mx-2">
          <Link href="/">
            <a className="no-underline font-semibold">
              <h1>Next.js Multiple Domains</h1>
            </a>
          </Link>
          <ul className="flex justify-between items-center space-x-4">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/leerob/nextjs-multiple-domains"
                className="no-underline font-semibold text-gray-700"
              >
                Source
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="skip">{children}</div>
    </>
  );
}
