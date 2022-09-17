import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { MantineProvider } from '@mantine/core'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Mulish',
        colorScheme: 'light',
        colors: {
          pink: ['#EDA3B5'],
        },
        fontSizes: {
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
          xl: 20,
        },
        headings: {
          fontFamily: 'Playfair Display',
          sizes: {
            h1: { fontSize: 48 },
            h2: { fontSize: 34 },
            h3: { fontSize: 24 },
          },
        },
        radius: {
          md: 12,
          lg: 16,
        },
      }}
    >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </MantineProvider>
  )
}

export default MyApp
