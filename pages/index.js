export default function Index({ host }) {
  return `Welcome to ${host}`;
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1, stale-while-revalidate=60'
  );

  return {
    props: {
      host: req.headers.host
    }
  };
}
