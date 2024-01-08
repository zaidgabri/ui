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
  } from '@chakra-ui/react'
import { CalendarIcon, DeleteIcon, } from '@chakra-ui/icons'

const SupprRdvModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    

  return (
    <>
       <Button leftIcon={<DeleteIcon/>} width={'10em'} colorScheme='red' onClick={onOpen} >Supprimer</Button>
        <Modal size={{ base: 'sm', md: 'lg',sm:'sm' }} isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" blockScrollOnMount={false}
        borderRadius="3xl" borderLeft="16px" borderColor="teal.400">
        <ModalOverlay />
        <ModalContent>
            <ModalHeader >Supprimer</ModalHeader>
            <ModalCloseButton />
            <Divider/>
   
            <ModalBody>
                <Heading  size='sm'>êtes-vous sûr de vouloir supprimer ceci ?</Heading>
                <Stack spacing={-4} >

                    
                        <Stack direction={'row'}>
                            <Text >Praticien :</Text>
                            <Text>Yanis Karim</Text>
                        </Stack>
                        
                        <Stack direction={'row'}>
                            <Text >Rendez-vous :</Text>
                            <Text >lundi 5 Juin 2023 10:00</Text>
                        </Stack>
    
                </Stack>
               
            
            </ModalBody>

            <ModalFooter>
                <Button  width={'10em'} variant='ghost' mr={3} onClick={onClose}>
                    Annuler
                </Button>
                <Button colorScheme='red' width={'10em'} >Supprimer</Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </>
  )
}

export default SupprRdvModal