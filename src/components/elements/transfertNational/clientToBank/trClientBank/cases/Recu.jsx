import { Button, Center, HStack, Icon, Square, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import { GoDesktopDownload } from 'react-icons/go';
import axios from 'axios'; // Import axios for making HTTP requests
import { baseURLtransfert } from '../../../../../../utils/useRequest';

const Recu = ({ onRecuButtonClick, transferID, transferRef }) => {
  const handleButtonClick = async () => {
    try {
      // Make a request to the API to get the PDF
      const response = await axios.get(`${baseURLtransfert}/transfers/downloadPDF/${transferID}`, {
        responseType: 'arraybuffer', // Set the responseType to 'arraybuffer' for binary data
      });

      // Convert the binary data to a blob
      const blob = new Blob([response.data], { type: 'application/pdf' });

      // Create a URL for the blob
      const url = URL.createObjectURL(blob);

      // Create a link element and simulate a click on it to trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.download = `recu_${transferRef}.pdf`;
      link.click();

      // Clean up by revoking the object URL
      URL.revokeObjectURL(url);

      // Optionally, you can trigger a callback or perform other actions after the download
      onRecuButtonClick('PDF downloaded successfully');
    } catch (error) {
      console.error('Error downloading PDF:', error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <>
      <Stack textAlign={'center'} bgColor={''}>
        <Text mt={4} mb={2} fontSize="xl" fontWeight="bold" className="PopB" textAlign={'left'}>
          Télécharger votre recu :
        </Text>

        <Center mx={32} mt={12} borderWidth="1px" borderRadius="lg" px="6" py="4" bg={useColorModeValue('white', 'gray.800')}>
          <VStack spacing="3">
            <Square size="10" bg="bg-subtle" borderRadius="lg">
              <Icon as={GoDesktopDownload} boxSize="9" color="muted" />
            </Square>
            <VStack spacing="1">
              <HStack spacing="1" whiteSpace="nowrap">
                <Button as="span" variant="link" cursor="pointer" colorScheme="teal" size="sm" onClick={handleButtonClick}>
                  Cliquez ici
                </Button>
                <Text fontSize="sm" color="muted">
                  pour télécharger votre recu
                </Text>
              </HStack>

              <Text fontSize="xs" color="muted">
                (PDF)
              </Text>
            </VStack>
          </VStack>
        </Center>
      </Stack>
    </>
  );
};

export default Recu;



// import { Button, Center, HStack, Icon, Square, Text, useColorModeValue, VStack, Input, Box,Stack } from '@chakra-ui/react'
// import React from 'react'
// import { GoDesktopDownload } from "react-icons/go";



// const Recu = ({ onRecuButtonClick, transferID }) => {
//   const handleButtonClick = (infos) => {
//     onRecuButtonClick(infos);
//   };


//   return (
//     <>
//     <Stack  textAlign={'center'} bgColor={""} >
//               <Text mt={4} mb={2} fontSize="xl" fontWeight="bold" className="PopB" textAlign={"left"}>
//                 Télecharger votre recu :
//               </Text>

//               <Center  mx={32} mt={12}  borderWidth="1px" borderRadius="lg" px="6" py="4" bg={useColorModeValue('white', 'gray.800')} >
//                 <VStack spacing="3">
//                   <Square size="10" bg="bg-subtle" borderRadius="lg">
//                     <Icon as={GoDesktopDownload} boxSize="9" color="muted" />
//                   </Square>
//                   <VStack spacing="1">
                  
//                       <HStack spacing="1" whiteSpace="nowrap">
//                         <label htmlFor="fileInput">
//                           <Button as="span" variant="link" cursor="pointer" colorScheme="teal" size="sm">
//                             Clicker ici 
//                           </Button>
//                         </label>
//                         <Text fontSize="sm" color="muted">
//                          pour télecharger votre recu
//                         </Text>
//                       </HStack>
                    
//                     <Text fontSize="xs" color="muted">
//                       (PDF)
//                     </Text>
//                   </VStack>
//                 </VStack>
                
//               </Center>
//             </Stack>

//     </>
//   )
// }

// export default Recu