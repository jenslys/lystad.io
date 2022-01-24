import { NextSeo } from "next-seo";
import opengraph from "../public/images/opengraph.svg";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Lystad"
        description="Personal Website"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Lystad",
          description: "Personal Website",
          images: [
            {
              url: "/images/opengraph.svg",
              width: 1200,
              height: 630,
              alt: "Lystad",
              type: "image/svg+xml",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
