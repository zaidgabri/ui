import { HStack, Square , Icon , Box , Text , Button,Stack ,VStack, useColorModeValue,Spinner} from '@chakra-ui/react'
import { DownloadIcon,TimeIcon } from '@chakra-ui/icons'
import { BsFiletypePdf } from 'react-icons/bs'

import React, { useState } from 'react'
import axios from 'axios';
import { baseURL, baseURLtransfert } from '../../../utils/useRequest'



const DownloadFiles = ({retraitData}) => {

  const [isLoading1, setIsLoading1] = useState(false);

  console.log(retraitData)
  const handleButtonClick = async () => {
    try {
      // Make a request to the API to get the PDF
      const response = await axios.get(`${baseURLtransfert}/transfers/downloadPDF/${retraitData.transferID}`, {
        responseType: 'arraybuffer', // Set the responseType to 'arraybuffer' for binary data
      });

      // Convert the binary data to a blob
      const blob = new Blob([response.data], { type: 'application/pdf' });

      // Create a URL for the blob
      const url = URL.createObjectURL(blob);

      // Create a link element and simulate a click on it to trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.download = `recu_${retraitData.transferID}.pdf`;
      link.click();

      // Clean up by revoking the object URL
      URL.revokeObjectURL(url);

      // Optionally, you can trigger a callback or perform other actions after the download
    //   onRecuButtonClick('PDF downloaded successfully');
    } catch (error) {
      console.error('Error downloading PDF:', error);
      // Handle the error, e.g., show an error message
    }
  };

      
      const capitalizeName = (name) => {
        const words = name.split(" ");
        const capitalizedWords = words.map((word, index) =>
          index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.toUpperCase()
        );
        const formattedName = capitalizedWords.join(" ");
        return formattedName;
      };

  return (
    <>
    <Stack mt={4} mb={10} >
            <Stack  justify="space-between"  mb={5}>

        </Stack>
         <HStack p={2} justify="space-between"  bg='white' borderWidth="1px" borderRadius="lg">
                        <HStack >

                            <Square size="10" bg="bg-subtle" borderRadius="lg">
                                    <Icon as={BsFiletypePdf} boxSize="8" color="muted" />
                            </Square>         
                            <Box textAlign={"left"} fontSize="sm">
                                <Text className='PopM' color="empahsized" fontWeight="medium">
                                   recu_{retraitData.transferID}
                                </Text>
                                <Text className='Pop' color="grey">
                                    75 KB
                                </Text>
                            </Box>
                        </HStack>
                        <Button variant="ghost" isDisabled={isLoading1}>
                            {isLoading1 ? (
                                <Spinner size="sm" color="teal.500" />
                            ) : (
                                <DownloadIcon
                                    size="sm"
                                    onClick={handleButtonClick}
                                    color="teal.500"
                                    cursor="pointer"
                                    _hover={{ color: 'teal.600' }}
                                />
                            )}
                        </Button>

                    </HStack>

                    
    </Stack>
    </>
  )
}

export default DownloadFiles