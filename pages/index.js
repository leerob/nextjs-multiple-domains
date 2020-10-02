import Layout from '../components/Layout';

export default function Index({ host }) {
  return (
    <Layout>
      <article className="prose lg:prose-xl px-8 m-auto mt-16">
        <h3>Next.js Multiple Domains</h3>
        <p>
          With Next.js, you can combine the benefits of static with dynamic
          server-rendered content. For example, let's say you have multiple
          domains and want to serve a different static page for each domain.
        </p>
        <p>
          Currently, the <code>getStaticProps</code> API does not support header
          matching. Fortunately, we can utilize{' '}
          <code>stale-while-revalidate</code> in combination with
          <code>getServerSideProps</code>. Let's assume we have two domains:
        </p>
        <ul>
          <li>
            <a href="https://multi-domain-first.vercel.app">
              <code>multi-domain-first.vercel.app</code>
            </a>
          </li>
          <li>
            <a href="https://multi-domain-second.vercel.app">
              <code>multi-domain-second.vercel.app</code>
            </a>
          </li>
        </ul>
        <p>
          <code>pages/index.js</code> uses <code>getServerSideProps</code> to
          forward the request header to the React component, as well as setting
          a response header. This{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control">
            cache-control
          </a>{' '}
          header uses <a href="/">stale-while-revalidate</a> to cache the server
          response. This allows you to generate static pages for any number of
          host headers.
        </p>
        <hr />
        <p>
          You're current viewing the host <code>{host}</code>.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded mr-4"
        >
          Refresh
        </button>
        <button
          onClick={() =>
            window.location.assign(
              `https://multi-domain-${
                host === 'multi-domain-first.vercel.app' ? 'second' : 'first'
              }.vercel.app`
            )
          }
          className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4"
        >
          Switch Domain
        </button>
        <p>
          This value is considered fresh for one second (<code>s-maxage=1</code>
          ). If a request is repeated within the next second, the previously
          cached value will still be fresh. If the request is repeated between 1
          and 60 seconds later, the cached value will be <i>stale</i> but still
          render (<code>stale-while-revalidate=59</code>).
        </p>
        <p>
          In the background, a revalidation request will be made to populate the
          cache with a fresh value. If you refresh the page, you will see the
          new host shown.
        </p>
      </article>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1, stale-while-revalidate=59'
  );

  return {
    props: {
      host: req.headers.host
    }
  };
}
