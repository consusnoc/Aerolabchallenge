import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Aerolab Challenge</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="stylesheet" type="text/css" href="/static/style.css" />
        
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}