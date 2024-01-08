import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button, Flex, HStack, IconButton, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GiStrikingArrows } from "react-icons/gi";
import { GiBottomRight3DArrow } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { GiMoneyStack } from "react-icons/gi";
import { IoMdCard } from "react-icons/io";



const TypeTransfertRoot = ({ onTypeButtonClick }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [typeClicked, setTypeClicked] = useState(false);

  
  const handleButtonClick = (type) => {
    setSelectedType(type);
    setTypeClicked(true);
    // onTypeButtonClick(type); // Make sure this line is calling the correct function
  };

  const renderAdditionalButtons = () => {
    if (selectedType === 'EMISSION D’UN TRANSFERT PAR DEBIT DE COMPTE') {
      return (
        <>
    {typeClicked && (
        <Stack maxW={'4xl'} margin={'auto'} justifyContent="center" bgColor={''} >
          <HStack bgColor={""} mt={9}  justifyContent={"space-between"}>

          <Text fontSize="xl" fontWeight="bold" className="Pop" textAlign={"right"} color={'blue.500'}>
              {selectedType}
          </Text>

          <IconButton aria-label="Go back" onClick={() => setTypeClicked(false)} icon={<ArrowBackIcon />} borderRadius="full" boxSize="40px" bgColor="blue.500" color="white" _hover={{ bgColor: 'teal.600' }} _active={{ bgColor: 'teal.700' }} />
            
        
        </HStack>

        <HStack m={0} p={0} height={{ base: '180px', md: '180px' }} justifyContent="center" bgColor={""}>
          <Flex justifyContent="center" alignItems="center" gap={10}>
          <Link to="/dash/TrClientClient" aria-label="Home">
            <Button
              size="xl"
              // colorScheme="blue"
              // variant="solid"
              border='2px'
              borderColor='blue.500'
              px={{ base: 6, md: 16 }}
              py={{ base: 6, md: 12 }}
            >
              WALLET_TO_WALLET
              </Button>
            </Link>
            <Link to="/dash/TrClientGab" aria-label="Home">
            <Button
              size="xl"
              // colorScheme="blue"
              // variant="solid"
              border='2px'
              borderColor='blue.500'
              px={{ base: 6, md: 16 }}
              py={{ base: 6, md: 12 }}
            >
              WALLET_TO_GAB
            </Button>
            </Link>

            <Link to="/dash/TrClientBank" aria-label="Home">
            <Button
              size="xl"
              // colorScheme="blue"
              // variant="solid"
              border='2px'
              borderColor='blue.500'
              px={{ base: 6, md: 16 }}
              py={{ base: 6, md: 12 }}
            >
              WALLET_TO_BANK
            </Button>
            </Link>
          </Flex>

        </HStack>
        </Stack>

    )}
        </>
      );
    } else if (selectedType === 'EMISSION D’UN TRANSFERT EN ESPECE') {
      return (
        <>

        {typeClicked && (

      <Stack maxW={'4xl'} margin={'auto'} justifyContent="center" bgColor={''} >

        <HStack bgColor={""} mt={9} justifyContent={"space-between"}>

            <Text fontSize="xl" fontWeight="bold" className="Pop" textAlign={"right"} color={'blue.500'}>
              {selectedType}
            </Text>

            <IconButton aria-label="Go back" onClick={() => setTypeClicked(false)} icon={<ArrowBackIcon />} borderRadius="full" boxSize="40px" bgColor="blue.500" color="white" _hover={{ bgColor: 'teal.600' }} _active={{ bgColor: 'teal.700' }} />
        
           
        </HStack>

        

        <HStack m={0} p={0} height={{ base: '180px', md: '180px' }} justifyContent="center" bgColor={""}>
          <Flex  alignItems="center" gap={10}>
          <Link to="/dash/TrKycGab" aria-label="Home">
            <Button
              size="xl"
              // colorScheme="blue"
              // variant="solid"
              border='2px'
              borderColor='blue.500'
              px={{ base: 6, md: 16 }}
              py={{ base: 6, md: 12 }}
            >
              BANK_TO_GAB
              </Button>
            </Link>
            <Link to="/dash/TrKycBank" aria-label="Home">
            <Button
              size="xl"
              // colorScheme="blue"
              // variant="solid"
              border='2px'
              borderColor='blue.500'
              px={{ base: 6, md: 16 }}
              py={{ base: 6, md: 12 }}
            >
              BANK_TO_BANK
            </Button>
            </Link>

            
          </Flex>

        </HStack>
        </Stack>

      )}
  
        </>
      );
    }
    return null;
  };

  return (
    <>
      <Stack justifyContent="center"  bgColor={""}>
        <Text mb={2} fontSize="xl" fontWeight="bold" className="PopB" textAlign={"left"} >
          Choisissez le type de transfert
        </Text>

        

        {!typeClicked && (
          
        <>

        

        <HStack m={0} p={0} height={{ base: '180px', md: '200px' }} justifyContent="center" bgColor={""}>
          <Flex justifyContent="center" alignItems="center" gap={10}>
            <Button
              leftIcon={<IoMdCard size={40} />}
              size={'xl'}
              colorScheme="blue"
              variant="solid"
              px={{ base: 6, md: 18}}
              py={{ base: 6, md: 12 }}
              onClick={() => handleButtonClick('EMISSION D’UN TRANSFERT PAR DEBIT DE COMPTE')}
            >
              Par débit de compte
            </Button>
            <Button
              leftIcon={<GiMoneyStack size={40} />}
              size={'xl'}
              colorScheme="blue"
              variant="solid"
              px={{ base: 6, md: 16 }}
              py={{ base: 6, md: 12 }}
              onClick={() => handleButtonClick('EMISSION D’UN TRANSFERT EN ESPECE')}
            >
              En espèce
            </Button>
          </Flex>

        </HStack>
        </>

        )}

        {renderAdditionalButtons()}

      </Stack>
    </>
  );
}

export default TypeTransfertRoot;


