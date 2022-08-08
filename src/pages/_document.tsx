import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
