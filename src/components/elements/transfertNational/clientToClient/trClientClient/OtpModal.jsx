import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Divider,
    Heading,
    Stack,
    VStack,
    HStack,
    IconButton,
    Badge,
    Center,
    Spinner,
  } from '@chakra-ui/react'
import { FiTrash2 } from 'react-icons/fi';
import ListBenif from './listBenif/ListBenif';
import Otp from './Otp';
import { baseURL } from '../../../../../utils/useRequest';
import axios from 'axios';


const OtpModal = ({sendOtpToSummary, tel}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setIsLoading] = useState(false); 


    const handleDelete = () => {
        // Perform the delete action here, e.g., call onDelete
        // ...
        // Close the modal
        onClose();
      };
    

      const handleAddClick = async (memberInfo) => {
        setIsLoading(true);
        // Perform the OTP sending action here
        try {
          const response = await axios.put(`${baseURL}/client/sendOTP`, {
            phone: tel, // Replace with the actual phone number
          });

          onOpen();
          // Handle the response as needed
          console.log('OTP sent successfully:', response.data);
        } catch (error) {
          // Handle errors
          console.error('Error sending OTP:', error);
        } finally {
          setIsLoading(false);
        }
      };


      const handleOtpClick = (e) => {
        sendOtpToSummary(e);
        onClose();
      }
  return (
    <>
       
       <Button px={7} variant={'solid'} colorScheme='teal'  size="sm" onClick={handleAddClick} disabled={isLoading}>
       {isLoading ? <Spinner size="sm" /> : "Envoyer l'Otp"}</Button>

        <Modal  size={{ base: 'sm', md: 'lg',sm:'sm' }} isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" blockScrollOnMount={false}
        borderRadius="3xl" borderLeft="16px" borderColor="teal.400">
        <ModalOverlay />
        <ModalContent>
           
   
            <ModalBody p={0}>
                <Center>
                    <Otp onAddOtpClick={handleOtpClick}/>
                </Center>
            
            </ModalBody>

        </ModalContent>
        </Modal>
    </>
  )
}

export default OtpModal