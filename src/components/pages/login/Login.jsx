'use client'

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  HStack,
  useBreakpointValue,
  IconButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Logo from '../../navbar/BoaLogo.svg';
import guichet from '../../../assets/img/guichet.jpg';
import { ArrowBackIcon, ArrowLeftIcon } from '@chakra-ui/icons';


const Login = () => {

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
      });
    //   position={"absolute"} top={4} left={4}
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        
        
      <Flex p={8} flex={1} align={'center'} justify={'center'} >
      
        <Stack spacing={4} w={'full'} maxW={'md'}>

        <HStack bgColor={""} mb={10} justifyContent={"space-between"}>
            <Link to="/" aria-label="Home">
                <IconButton aria-label="Go back" icon={<ArrowBackIcon />} borderRadius="full" boxSize="40px" bgColor="teal.500" color="white" _hover={{ bgColor: 'teal.600' }} _active={{ bgColor: 'teal.700' }} />
            </Link>   
            
            <Image src={Logo} alt="Logo" height="10" width="auto" />
           
        </HStack>
        <HStack bgColor={""} justifyContent={"left"}>
          <Heading fontSize={'2xl'} >Sign in to your account</Heading>
        </HStack>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>
            <Link to="/dash" aria-label="dash">
                <Button width={"full"} colorScheme={'blue'} variant={'solid'}>
                Sign in
                </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      {isDesktop && (
        <>
        <Flex flex={1}>
            <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={guichet}
            />
        </Flex>
    </> )}
    </Stack>
  )
}

export default Login;
