import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { Navbar } from '@/components/navbar'
'use client'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Navbar/>
      <Component {...pageProps} />
      </ChakraProvider>
      </CacheProvider>
  )
}