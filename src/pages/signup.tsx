import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Input, Stack, Text } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function SignUp() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <Stack spacing={3}>
        <Text fontSize='4xl'>👾 Sign Up 👾</Text>
     <Input placeholder='Enter a Username...' size='md' />
     <Input placeholder='Enter a Password...' size='md' />
     <Button variant='ghost' colorScheme='blue'>Sign Up</Button>
    </Stack>
    </main>
  )
}
