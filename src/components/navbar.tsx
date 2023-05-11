import { loginStateGet } from '@/state';
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    Text,
  } from '@chakra-ui/react'
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
  
  const navigatePage = (linkStr: string) => {
    console.log(linkStr);
    
  }
  export const Navbar = () => {
    const getLoggedInState = useRecoilValue(loginStateGet);
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
      <Box as="section" pb={{ base: '12', md: '24' }}>
        <Box as="nav" bg="bg-surface" boxShadow="sm">
          <Container py={{ base: '4', lg: '5' }}>
            <HStack spacing="10" justify="space-between">
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {['Home', 'Explore', 'Trending'].map((item) => (
                    <Link key= {item} href={item.toLowerCase()} passHref>
                      <Button key={item}>{item}</Button>
                    </Link>
                    ))}
                  </ButtonGroup>
                  <HStack spacing="3">
                    {getLoggedInState == "" ?  <><Link href="/signin" passHref><Button variant="ghost" colorScheme='messenger' onClick={() => navigatePage('signin')}>Sign in</Button></Link>
                    
                    <Link href='/signup' passHref><Button variant="primary" colorScheme='messenger' onClick={() => navigatePage('signup')}>Sign up</Button></Link>
                    </> : <Text>Logged in as {getLoggedInState}</Text>
                    }

                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    )
  }