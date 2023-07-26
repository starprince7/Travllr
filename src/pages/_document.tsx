import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Transport Booking Company</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="Prince Nweke, starprince, dev_starprince, @dev_starprince, Starprince, prince, nweke, prince nweke, javascript developer, software developer, software engineer, fullstack, developer"
        />
        <meta name="description" content="A transportation booking system." />
        <meta name="author" content="Prince Nweke A." />
        <meta name="og:title" content="Prince Nweke Software developer" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="princenweke" />
        <meta
          name="og:description"
          content="Prince Nweke is an accomplished software engineer
            based in Lagos, Nigeria. He specialises in web
            development and standard practices with an emphasis on
            offering practical solutions to people and small
            enterprises."
        />
        {/* Google Font Karla */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
