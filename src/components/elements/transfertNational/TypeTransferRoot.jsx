import { Button, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GiStrikingArrows } from "react-icons/gi";
import { GiBottomRight3DArrow } from "react-icons/gi";

const TypeTransferRoot = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleButtonClick = (type) => {
    setSelectedType(type);
    // onTypeButtonClick(type); // Make sure this line is calling the correct function
  };

  const renderAdditionalButtons = () => {
    if (selectedType === 'Compte') {
      return (
        <>
          <Button onClick={() => handleButtonClick('TrClientClient')}>
            TrClientClient
          </Button>
          <Button onClick={() => handleButtonClick('TrClientGab')}>
            TrClientGab
          </Button>
          <Button onClick={() => handleButtonClick('TrClientBank')}>
            TrClientBank
          </Button>
        </>
      );
    } else if (selectedType === 'Espece') {
      return (
        <>
          <Button onClick={() => handleButtonClick('TrKycGab')}>
            TrKycGab
          </Button>
          <Button onClick={() => handleButtonClick('TrKycBank')}>
            TrKycBank
          </Button>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <Stack textAlign={'center'} bgColor={""}>
        <Text mb={2} fontSize="xl" fontWeight="bold" className="PopB" textAlign={"left"}>
          Choisissez le type de transfert
        </Text>

        <Text fontSize="xl" fontWeight="medium" className="Pop" textAlign={"center"}>
          Le type est: {selectedType}
        </Text>

        <HStack m={0} p={0} height={{ base: '180px', md: '200px' }} justifyContent="center" bgColor={""}>

          <Flex justifyContent="center" alignItems="center" gap={10}>
            <Button
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

        {renderAdditionalButtons()}

      </Stack>
    </>
  );
}

export default TypeTransferRoot;