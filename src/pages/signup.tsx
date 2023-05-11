import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Input, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { users } from '@/state'

const inter = Inter({ subsets: ['latin'] })


export default function SignUp() {
    const [data, setData] = useState ({
        username:"",
        password:""
    })

    const {username, password} = data;
    const signupHandler = () => {

            user.set(username, {
                username: username,
                password: password,
            })
    }

    const [user, setUsers] = useRecoilState(users);

    const changeHandler = (e:any) => {

        setData({...data,[e.target.name]:[e.target.value]});
        
        }
    
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <Stack spacing={3}>
        <Text fontSize='4xl'>👾 Sign Up 👾</Text>
     <Input placeholder='Enter a Username...' size='md' name="username" value = {username} onChange={changeHandler}/>
     <Input placeholder='Enter a Password...' size='md' name="password" value={password} onChange={changeHandler}/>
     <Button variant='ghost' colorScheme='blue' onClick={signupHandler}>Sign Up</Button>
    </Stack>
    </main>
  )
}
