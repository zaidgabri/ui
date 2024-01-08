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


const DeleteItem = ({name, rib, cin}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleDelete = () => {
        // Perform the delete action here, e.g., call onDelete
        // ...
        // Close the modal
        onClose();
      };
    

  return (
    <>
       <IconButton icon={<FiTrash2 fontSize="1.25rem" />} colorScheme='red' aria-label="Delete member" onClick={onOpen}/>
        <Modal size={{ base: 'sm', md: 'lg',sm:'sm' }} isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" blockScrollOnMount={false}
        borderRadius="3xl" borderLeft="16px" borderColor="teal.400">
        <ModalOverlay />
        <ModalContent>
            <ModalHeader >Supprimer de la liste noir</ModalHeader>
            <ModalCloseButton />
            <Divider/>
   
            <ModalBody>
                <Heading  size='sm' mb={2}>êtes-vous sûr de vouloir supprimer ceci ?</Heading>
                <Stack spacing={-4} >

                        <Stack direction={'row'}>
                            <Text>Le Nom Complet :</Text>
                            <Text>{name}</Text>
                        </Stack>

                    
                        <Stack direction={'row'}>
                            <Text>CIN :</Text>
                            <Text>{cin}</Text>
                        </Stack>
                        
                        <Stack direction={'row'}>
                            <Text>RIB :</Text>
                            <Text>{rib}</Text>
                        </Stack>
    
                </Stack>
               
            
            </ModalBody>

            <ModalFooter>
                <Button width={'10em'} variant={'solid'} mr={3} onClick={onClose}>
                    Annuler
                </Button>
                <Button colorScheme="red" width={'10em'} onClick={handleDelete}>
                    Supprimer
                </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </>
  )
}

export default DeleteItem