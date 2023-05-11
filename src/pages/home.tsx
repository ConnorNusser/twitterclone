import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Input, Text, Textarea } from '@chakra-ui/react'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [text, setText] = useState('');

    const createTweet = () => {
        const localText = text;
    }
  return (
    <main
      className={`flex flex-col items-center`}
    >
      <Text fontSize='4xl'>👾 Home 👾</Text>
      <Textarea
      boxSize='36rem'
      maxHeight='12rem'
        placeholder='Here is a sample placeholder'
        size='lg'
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <Button variant='ghost' colorScheme='messenger'>Tweet</Button>
    </main>
  )
}
