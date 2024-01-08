import { Button, Flex, HStack, Icon, SimpleGrid, Stack, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import BoaDestCard from '../BoaDestCard';
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { SlArrowDownCircle } from "react-icons/sl";

import OtpModal from '../OtpModal';
import axios from 'axios'; // Importez axios
import { baseURLtransfert } from '../../../../../../utils/useRequest';
import BoaOrdonnateurCard from '../BoaOrdonnateurCard';
import BoaCard from '../BoaCard';
import BoaOneDestCard from '../BoaOneDestCard';

const Summary = ({ onSummaryButtonClick, objetTransfer, ordonnateur, destinations }) => {

  const toast = useToast(); // Utilisez la fonction useToast

  
  const [pdfURL, setPdfURL] = useState('');
  const [message, setMessage] = useState('');
  const [otp, setOtp] = useState('');



 

 

  const receiveOtpFromModal = (otpReceived) => {
    setOtp(otpReceived);
    console.log("OTP Value:", otp);
    console.log("dest", destinations)
  }



  const extractedAmounts = destinations.map(destination => parseFloat(destination.montant));


  const handleButtonClick = async (infos) => {
    // Extracting beneficiariesIds and amounts
    const extractedBeneficiariesIds = destinations.map(destination => destination.id);
  
    // Ajoutez otp et state à l'objetTransfer
    const objetTransferWithOtp = {
      ...objetTransfer,
      beneficiaries_ids: extractedBeneficiariesIds,
      amounts: extractedAmounts,
      otp: otp,
      state: "SERVED",
      type: "WALLET_TO_WALLET",
      isInitiatedFromMobile: false,
    };
  
    console.log('objet', objetTransferWithOtp);
    

    // Faites la requête HTTP ici avec axios
    try {
      const response = await axios.post(`${baseURLtransfert}/transfers/initiate`, objetTransferWithOtp);
      console.log("API Response:", response.data);
      // console.log(response.data.isInitiated);
      if (response.data.isInitaited) {
        toast({
          title: 'Transfert initié',
          description: response.data.message,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
  
        // Call the parent function with the modified object
        onSummaryButtonClick(response.data.transferID, response.data.ref);
      } else {
        // Display an error message or take appropriate action
        toast({
          description: response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
     } catch (error) {
      console.error('Error initiating transfer:', error);
    
      toast({
        description: 'Une erreur s\'est produite lors de l\'initiation du transfert.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    
  };

  
  return (
    <>
    <Stack textAlign={'center'}  >
      <HStack mt={4} justifyContent={'space-between'}>
        <Text fontSize="xl" fontWeight="bold" className="PopB" textAlign={"left"}>
          Voici le Récapitulative du transfert
        </Text>
        <OtpModal sendOtpToSummary={receiveOtpFromModal} tel={ordonnateur.phone}/>
      </HStack>

      {destinations.length === 1 ? (
      <HStack mt={8} px={10} justifyContent={'space-between'}>
                <BoaCard  ordonnateur={ordonnateur}/>
                <Flex direction="column" alignItems="center">
                      <Text fontSize={{ base: 'xs', md: 'lg' }}>Montant : {extractedAmounts} Dhs</Text>
                      <Icon as={IoArrowForwardCircleSharp} color={"#056AA7"} boxSize={{ base: 4, md: 14 }} mt={{ base: 1, md: 2 }} />
                </Flex>
                <BoaOneDestCard destination={destinations}/>
      </HStack>
      ) : (    
      <Stack mt={8}  alignItems={'center'}  bgColor={""}>
        <BoaOrdonnateurCard  ordonnateur={ordonnateur}/>
        
        <SimpleGrid columns={3} spacingY={10} spacingX={"50px"} mt={{ base: 1, md: 5 }}>
            {destinations.map((destination, index) => (
              <BoaDestCard key={index} destination={destination} />
            ))}
        </SimpleGrid>
        
      </Stack>
      )}
      <Button mt={6} px={7} variant={'solid'} colorScheme='blue' size="sm" onClick={handleButtonClick} >Valider</Button>
    </Stack>
    </>
  )
}

export default Summary;


