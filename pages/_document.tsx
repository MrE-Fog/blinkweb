import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            type="text/javascript"
            data-padding="16px 16px"
            data-font-family="PragmataPro, arial, sans-serif"
            id="cookiebanner"
            src="https://cdnjs.cloudflare.com/ajax/libs/cookie-banner/1.2.2/cookiebanner.min.js"
          />
          <link
            rel="preload"
            href="/fonts/pragmatapro_mono_r_liga_0827-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/pragmatapro_mono_b_liga_0827-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@blinkshell"/>
        </Head>
        <body>
	   <Script
		src="https://www.googletagmanager.com/gtag/js?id=UA-84834352-1"
		strategy="afterInteractive"
	   />
	   <Script id="google-analytics" strategy="afterInteractive">
		{`
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){window.dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-84834352-1');
		`}
	   </Script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
