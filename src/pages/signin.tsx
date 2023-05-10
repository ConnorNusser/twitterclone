import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Text } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function SignIn() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Text fontSize='4xl'>👾 Trending 👾</Text>
    </main>
  )
}
