import React from 'react'
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
  } from '@chakra-ui/react'
import { FiTrash2 } from 'react-icons/fi';
import { EditIcon } from '@chakra-ui/icons';


const ModalBtn = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleDelete = () => {
        // Perform the delete action here, e.g., call onDelete
        // ...
        // Close the modal
        onClose();
      };
    

  return (
    <>
       <IconButton icon={<EditIcon fontSize="1.25rem" />} colorScheme='teal' aria-label="Delete member" onClick={onOpen}/>

        <Modal size={{ base: 'sm', md: 'lg',sm:'sm' }} isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" blockScrollOnMount={false}
        borderRadius="3xl" borderLeft="16px" borderColor="teal.400">
        <ModalOverlay />
        <ModalContent>
            <ModalHeader >Details</ModalHeader>
            <ModalCloseButton />
            <Divider/>
   
            <ModalBody>
                <Heading  size='sm' mb={2}>Voici les informations concernant cette opérations :</Heading>
                <Stack spacing={-4} >

                        <Stack direction={'row'}>
                            <Text>Le Nom Complet :</Text>
                            <Text>name</Text>
                        </Stack>

                    
                        <Stack direction={'row'}>
                            <Text>CIN :</Text>
                            <Text>cin</Text>
                        </Stack>
                        
                        <Stack direction={'row'}>
                            <Text>RIB :</Text>
                            <Text>rib</Text>
                        </Stack>
    
                </Stack>
               
            
            </ModalBody>

            
        </ModalContent>
        </Modal>
    </>
  )
}

export default ModalBtn