import Head from "next/head";

function Meta() {
  return (
    <Head>
      <title>Ovulation Calculator App | Code of Relevancy</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Ovulation Calculator App is developed by Code of Relevancy"
      />
      <meta
        name="keywords"
        content="code, relavancy, ovulation calculator app, next.js, typescript, tailwind css, fertile window, approximate ovulation, next period, pregnancy test day, cycle, health, calculator"
      />
      <meta name="author" content="Parimal Nakrani" />
      <meta
        name='msapplication-TileImage'
        content='/code-of-relevancy-logo.png'
      />

      {/* Open Graph Tags */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Ovulation Calculator App' />
      <meta
        property='og:description'
        content='Ovulation Calculator App is developed by Code of Relevancy'
      />
      <meta
        property='og:url'
        content='https://linktr.ee/codeofrelevancy?utm_source=weather-app&utm_medium=meta&utm_campaign=promotion'
      />
      <meta property='og:site_name' content='Code of Relevancy' />
      <meta property='og:image' content='/code-of-relevancy-logo.png' />
      <meta property='og:image:width' content='200' />
      <meta property='og:image:height' content='200' />
      <meta property='og:locale' content='en_US' />

      {/* Twitter Tags */}
      <meta name='twitter:title' content='Ovulation Calculator App' />
      <meta
        name='twitter:description'
        content='Ovulation Calculator App is developed by Code of Relevancy'
      />
      <meta name='twitter:image' content='/code-of-relevancy-logo.png' />
      <meta name='twitter:image:alt' content='Code of Relevancy' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@codeofrelevancy' />

      {/* App Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Meta;
