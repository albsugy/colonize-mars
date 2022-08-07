import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { SkipNavContent } from '@chakra-ui/skip-nav'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode="dark" />
          <SkipNavContent />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
