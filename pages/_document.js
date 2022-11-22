import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Email Marketing Landing Page Kenya" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100&display=swap" rel="stylesheet"></link>
        <Script
            id='gtmem-ke'
            strategy='beforeInteractive'
            >
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TW54CDM');`}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        {/*<Script
          type="text/javascript"
          strategy="beforeInteractive"
          src="https://static.mailerlite.com/js/w/webforms.min.js?v7316d10e2931a97c7b0f5c7e7e7be3ea"
          id="element"
        >
          
        </Script>
        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src="/scripts/ml.js"
          id="element1"
        >

        </Script>*/}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TW54CDM"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
      </body>
    </Html>
  )
}