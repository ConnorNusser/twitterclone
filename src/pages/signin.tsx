import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Input, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { signInState, userGet, users } from '@/state';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function SignIn() {
    const userVals = useRecoilValue(userGet);
    const [data, setData] = useState ({
        username:"",
        password:""
    })
    const {username, password} = data;
    const [_, loggedState] = useRecoilState(signInState);
    const submitHandler = (e:any) => {
        loggedState(username);   
    }
    const changeHandler = (e:any) => {
        setData({...data,[e.target.name]:[e.target.value]});
    }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-36 ${inter.className}`}
    >
      
      <Text fontSize='4xl'>Welcome to Twitere!</Text>
      
    <Stack spacing={3}>
    <Text fontSize='2xl'>Sign in here 🧞‍♂️</Text>
    <Input placeholder='Username' size='md' name="username" value={username} onChange={changeHandler}/>
     <Input placeholder='Password' size='md' name="password" value={password} onChange={changeHandler}/>
     <Button variant='ghost' colorScheme='blue' onClick={submitHandler}>Sign In</Button>
    </Stack>
    <TableContainer>
        <Table variant='striped' colorScheme='teal'>
            <TableCaption>User List</TableCaption>
            <Thead>
            <Tr>
                <Th>Usernames</Th>
            </Tr>
            </Thead>
            <Tbody>
                {Array.from(userVals.entries()).map(([key, value]) => (
                    
                    <Tr key={key}>
                    <Td>{value.username}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </TableContainer>
    </main>
  )
}


