import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/images/icons/favicon.ico" rel="shortcut icon" />
          <meta
            content="#000000"
            name="theme-color"
            media="(prefers-color-scheme: dark)"
          />
        </Head>
        <body className="text-white bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
