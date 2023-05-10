import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Input, Stack, Text } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function SignIn() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-36 ${inter.className}`}
    >
      <Text fontSize='4xl'>Welcome to Twitere!</Text>
      
    <Stack spacing={3}>
    <Text fontSize='2xl'>Sign in here 🧞‍♂️</Text>
     <Input placeholder='Username' size='md' />
     <Input placeholder='Password' size='md' />
     <Button variant='ghost' colorScheme='blue'>Sign In</Button>
    </Stack>
    </main>
  )
}
