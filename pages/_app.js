import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";
const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  const canonicalUrl = `https://marwan-mostafa.com`;
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Marwan Mostafa - React.js Frontend Developer</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        
        <meta name="description" content="Marwan Mostafa, a React.js frontend developer with 3 years of experience in TypeScript, Node.js, and AWS. Remote work ready and available for hiring." />
        <meta name="keywords" content="Marwan Mostafa, Marwan Nassef, Marwan Developer, Marwan frontend, AWS,, React.js, frontend developer, remote work, TypeScript, Node.js, backend, AWS, hiring" />
        <meta name="author" content="Marwan Mostafa" />
        <meta property="og:title" content="Marwan Mostafa - React.js Frontend Developer" />
        <meta property="og:description" content="Marwan Mostafa, a React.js frontend developer with 3 years of experience in TypeScript, Node.js, and AWS. Remote work ready and available for hiring." />
        <meta property="og:image" content="https://x.com/MarwanNassefz/photo" /> 
        <meta property="og:url" content="https://marwan-mostafa.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marwan Mostafa - React.js Frontend Developer" />
        <meta name="twitter:description" content="Marwan Mostafa, a React.js frontend developer with 3 years of experience in TypeScript, Node.js, and AWS. Remote work ready and available for hiring." />
        <meta name="twitter:image" content="https://x.com/MarwanNassefz/photo" /> 
        <link rel="canonical" href={canonicalUrl} />
        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Jost%3A0%2C100%3B0%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900%3B1%2C100%3B1%2C200%3B1%2C300%3B1%2C400%3B1%2C500%3B1%2C600%3B1%2C700%3B1%2C800%3B1%2C900%7CCaveat%3A400%3B500%3B600%3B700&display=swap"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=auto"
          type="text/css"
          media="all"
        />
        {/* CSS STYLES */}
        <link
          rel="stylesheet"
          href="assets/css/vendors/bootstrap.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/fonts/font-awesome/css/font-awesome.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/magnific-popup.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/splitting.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/swiper.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/animate.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/style.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/dark.css"
          type="text/css"
          media="all"
        />
        {/* Favicon */}
        <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="assets/favicon.ico" type="image/x-icon" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Marwan Mostafa",
              "url": "https://marwan-mostafa.com",
              "image": "https://media.licdn.com/dms/image/v2/D5603AQFxXXsduhEuFA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1677151760768?e=1730937600&v=beta&t=mHq_4Lgg5SkIwDGQQAea9ZjsiCO9XSl25C4aMTJHk9I",
              "sameAs": [
                "https://www.linkedin.com/in/marwan-ahmed-6112801a6/",
                "https://github.com/marawanthedev",
                "https://x.com/MarwanNassefz"
              ],
              "jobTitle": "React Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "tigerlab"
              }
            })
          }}
        />
      </Head>
      {loader && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
