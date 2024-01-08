// 'use client'

import { Center, Heading } from '@chakra-ui/react'
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react'
import { PinInput, PinInputField } from '@chakra-ui/react'
import { useState } from 'react';

const Otp = ({onAddOtpClick}) => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value) => {
      // Update the state with the entered OTP value
      setOtp(value);
      console.log(value); // Utilisez 'value' plutôt que 'otp'
  };
  
  const handleAddClick = () => {
    // Pass the OTP value to the parent component
    onAddOtpClick(otp);
};

  return (
      <Stack
          spacing={4}
          w={'full'}
          maxW={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
      >
          <Center>
              <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                  La saisie de l’OTP
              </Heading>
          </Center>
          <Center
              fontSize={{ base: 'sm', sm: 'md' }}
              color={useColorModeValue('gray.800', 'gray.400')}
          >
              Saisir l’OTP communiqué par le client envoyé par SMS
          </Center>
          
          <FormControl>
              <Center>
                  <HStack>
                      <PinInput onChange={handleOtpChange}>
                          <PinInputField />
                          <PinInputField />
                          <PinInputField />
                          <PinInputField />
                      </PinInput>
                  </HStack>
              </Center>
          </FormControl>
          <Stack spacing={6}>
              <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                      bg: 'blue.500',
                  }}
                  onClick={handleAddClick}
              >
                  Ajouter
              </Button>
          </Stack>
      </Stack>
  );
};

export default Otp;



// 'use client'

// import { Center, Heading } from '@chakra-ui/react'
// import {
//   Button,
//   FormControl,
//   Flex,
//   Input,
//   Stack,
//   useColorModeValue,
//   HStack,
// } from '@chakra-ui/react'
// import { PinInput, PinInputField } from '@chakra-ui/react'
// import { useState } from 'react'

//  const Otp = () => {

//     const [otp, setOtp] = useState("");

//     const handleOtpChange = (value) => {
//         // Update the state with the entered OTP value
//         setOtp(value);
//         console.log(otp);

//       };
    
//   return (
    
//       <Stack
//         spacing={4}
//         w={'full'}
//         maxW={'lg'}
//         bg={useColorModeValue('white', 'gray.700')}
//         rounded={'xl'}
//         boxShadow={'lg'}
//         p={6}
//         >
//         <Center>
//           <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
//                 La saisie de l’OTP
//           </Heading>
//         </Center>
//         <Center
//           fontSize={{ base: 'sm', sm: 'md' }}
//           color={useColorModeValue('gray.800', 'gray.400')}>
//           Saisir l’OTP communiqué par le client envoyé par SMS
//         </Center>
        
//         <FormControl>
//           <Center>
//             <HStack>
//               <PinInput onChange={handleOtpChange}>
//                 <PinInputField />
//                 <PinInputField />
//                 <PinInputField />
//                 <PinInputField />
//               </PinInput>
//             </HStack>
//           </Center>
//         </FormControl>
//         <Stack spacing={6}>
//           <Button
//             bg={'blue.400'}
//             color={'white'}
//             _hover={{
//               bg: 'blue.500',
//             }}>
//             Ajouter
//           </Button>
//         </Stack>
//       </Stack>
    
//   )
// }

// export default Otp