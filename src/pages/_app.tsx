import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../themes/global'
import { theme } from '../themes/theme'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Julio Cesar</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          // eslint-disable-next-line max-len
          content="Focados em desenvolvimento de websites e aplicativos utilizando bibliotecas e frameworks, além de compartilhamento de conhecimentos"
        />
        <meta name="author" content="UNNAMEDS" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="content-language" content="pt-br, en-US" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="copyright" content="© 2021 Unnameds" />
        <meta
          name="keywords"
          // eslint-disable-next-line max-len
          content="unnameds, javascript, html, css, react, api, documentação, lib de components, startup"
        />
        <meta httpEquiv="pragma" content="no-cache" />
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="imagetoolbar" content="no" />
        <meta name="generator" content="Next.js" />
        <meta name="rating" content="general" />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>

    </>
  )
}

export default MyApp
