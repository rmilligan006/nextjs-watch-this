import Head from "next/head";

const Meta = ({ keywords, description, title }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Watch This",
  keywords: "movie app, movie database, popular movies",
  description: "Want to find your next favourite movie? Look no further!",
};

export default Meta;
