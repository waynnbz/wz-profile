import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link
          rel="preload"
          as="font"
          href="/fonts/VisueltPro/VisueltPro-Bold.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          href="/fonts/VisueltPro/VisueltPro-Light.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          as="image"
          href="/web3Coder-lg.png"
          imageSrcSet="/web3Coder-sm.png 480w, 
        /web3Coder-md.png 960w, 
        /web3Coder-lg.png 1340w"
          imageSizes="(min-width: 767px) 100vw, 
          (max-width: 991px) 50vw, 
          50vw"
        />

        <link
          rel="preload"
          as="video/mp4"
          href="/Projects/FoodDemo/FoodAnimation.mp4"
        />
        <link
          rel="preload"
          as="video/mp4"
          href="/Projects/IceManDemo/IceManAnimation.mp4"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan&family=Roboto&family=Rubik:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
