import { Icon, PhoneIcon } from '@chakra-ui/icons'
import { Box, Button, Circle, Container, FormControl, HStack, Input, InputGroup, Spinner, Stack, useColorModeValue as mode, useColorModeValue,Text, useToast, InputLeftElement } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { MdTrackChanges } from 'react-icons/md'
import DownloadFiles from './DownloadFiles';
import DefaultImg from './DefaultImg';
import { baseURL } from '../../../utils/useRequest'
import { BiMoneyWithdraw } from "react-icons/bi";
import { BiSolidIdCard } from "react-icons/bi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { RiShieldCheckLine } from "react-icons/ri";





const RetraitArgent = () => {

    const [orderId, setOrderId] = useState('');
    const [cin, setCin] = useState('');
    const [ref, setRef] = useState('');
  const [retraitData, setRetraitData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // État pour gérer le chargement
  const [errorMsg, setErrorMsg] = useState("Order Id not found"); // Nouvel état pour gérer les erreurs
  const [toggleImage, setToggleImage] = useState(false); //

  const toast = useToast(); // Move useToast hook outside the function component


  const handleCheck = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${baseURL}/client/serverTransfer`, {
        transferType:"WALLET_TO_BANK",
        cin: cin,
        ref: ref
      });

     console.log("API Response:", response.data);
      if (response.data.isServed) {
        toast({
          description: response.data.message,
          status: 'info',
          duration: 5000,
          isClosable: true,
        });
        
      setRetraitData(response.data);

      } else {
        // Display an error message or take appropriate action
        toast({
          description: response.data.message,
          status: 'warning',
          duration: 5000,
          isClosable: true,
        });
        setCin('');
        setRef('');
        setRetraitData(null);
      }
     } catch (error) {
      console.error('Error initiating transfer:', error);
    
      toast({
        description: "Une erreur s\'est produite lors de retrait d'argent.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setRetraitData(null);
    
    } finally {
      setIsLoading(false);
    }
  };
 
  return (
    <>
        <Box  bgColor={""}  >
            <Container flex="1" maxW="7xl" > 
        <Box mt={"30px"} p={"20px"} bgColor={"teal.400"} zIndex={1999}
          position="relative" overflow="hidden" borderRadius="2xl" borderTop="8px" borderColor="#004C7A"
        >
          <Stack>

            <HStack>
              <Circle size={{ base: '9', sm: '12', }} bg={useColorModeValue('blue.50', 'whiteAlpha.50')}>
                <Icon fontSize={30} as={BiMoneyWithdraw} color="black" />
              </Circle>
              <Text fontSize={{ base: '2xl', sm: '4xl', }} className='PopB' color={"white"}>
                Retrait d'Argent
              </Text>
            </HStack>

            <Text className='Pop' fontSize={{ base: 'sm', md: 'md', sm: 'md', }} mt="2" color={"white"}>
                Pour effectuer un retrait d'argent, veuillez fournir les informations suivantes :
            </Text>

          </Stack>

          <Stack mt={4}>
            <HStack justifyContent={'space-between'}>

              <FormControl isRequired>
                <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <Icon fontSize={30} as={BiSolidIdCard} color='gray.300' />
                </InputLeftElement>
                  <Input
                    type="text"
                    className='Pop'
                    placeholder="Cin"
                    bgColor={"white"}
                    focusBorderColor='whiteAlpha'
                    value={cin}
                    onChange={(e) => setCin(e.target.value)}
                    disabled={isLoading} // Désactiver le bouton pendant le chargement
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Icon fontSize={30} as={RiShieldCheckLine} color='gray.300' />
                    </InputLeftElement>
                  <Input
                    type="text"
                    className='Pop'
                    placeholder="Réference"
                    bgColor={"white"}
                    focusBorderColor='whiteAlpha'
                    value={ref}
                    onChange={(e) => setRef(e.target.value)}
                    disabled={isLoading} // Désactiver le bouton pendant le chargement
                  />
                </InputGroup>
              </FormControl>

              

              <Button className='Pop' colorScheme="whiteAlpha" color={'white'} size="md" px={12} onClick={handleCheck}>
              {isLoading ? <Spinner size="sm" /> : 'Vérifier'}
              </Button>
              
            </HStack>
          </Stack>
          


          


        </Box>
        <Box  px={"20px"} py={"35px"} transform={{ base: 'translateY(-25px)', md: 'translateY(-25px)', }}
          bgColor={"white"} borderRadius="2xl"
        >

            
            
          {retraitData ? <DownloadFiles retraitData={retraitData} /> : <DefaultImg toggleImage={!toggleImage}/>}

        </Box>
             </Container>
        </Box>
    </>
  )
}

export default RetraitArgent