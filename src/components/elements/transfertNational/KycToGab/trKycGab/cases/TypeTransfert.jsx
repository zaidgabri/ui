


import { Button, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { GiStrikingArrows } from "react-icons/gi";
import { GiBottomRight3DArrow } from "react-icons/gi";




const TypeTransfert = ({ onTypeButtonClick }) => {
  const handleButtonClick = (type) => {
    onTypeButtonClick(type); // Make sure this line is calling the correct function
  };

  return (
    <>
      <Stack textAlign={'center'} bgColor={""}>
        <Text mb={2} fontSize="xl" fontWeight="bold" className="PopB" textAlign={"left"}>
          Choisissez le type de transfert
        </Text>

        <Text fontSize="xl" fontWeight="medium" className="Pop" textAlign={"center"}>
         Le type est:
        </Text>

        <HStack m={0} p={0} height={{ base: '180px', md: '200px' }} justifyContent="center" bgColor={""}>

          <Flex justifyContent="center" alignItems="center" gap={10}>
            <Button
              // leftIcon={<GiBottomRight3DArrow fontSize={"42px"} />} // Adjust fontSize based on screen size
              size="xl"
              colorScheme="blue"
              variant="solid"
              px={{ base: 6, md: 16 }}
              py={{ base: 6, md: 12 }}
              onClick={() => handleButtonClick('Compte')}
            >
              Par débit de compte
            </Button>
            <Button
              // rightIcon={<GiStrikingArrows fontSize={"42px"} />} // Adjust fontSize based on screen size
              size="xl"
              colorScheme="blue"
              variant="solid"
              px={{ base: 6, md: 16 }}
              py={{ base: 6, md: 12 }}
              onClick={() => handleButtonClick('Espece')}
            >
              En espèce
            </Button>
          </Flex>

        </HStack>
      </Stack>
    </>
  );
}

export default TypeTransfert;
