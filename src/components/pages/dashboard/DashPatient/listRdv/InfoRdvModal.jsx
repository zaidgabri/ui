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
import SupprRdvModal from './SupprRdvModal'

const InfoRdvModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
        <Button onClick={onOpen} variant={'solid'} colorScheme={'teal'} size="sm" >Consulter</Button>
        <Modal size={{ base: 'sm', md: 'lg',sm:'sm' }} isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" blockScrollOnMount={false}
        borderRadius="3xl" borderLeft="16px" borderColor="teal.400">
        <ModalOverlay />
        <ModalContent>
            <ModalHeader >Rendez-vous</ModalHeader>
            <ModalCloseButton />
            <Divider/>
   
            <ModalBody>
                <Heading  size='sm'>Informations de rendez-vous</Heading>
                <Stack spacing={-4} >

                    <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} >
                        <Stack direction={'row'} justifyContent={'space-between'} width={'50%'}>
                            <Text >Praticien</Text>
                            <Text >:</Text>
                        </Stack>
                        <Text width={'50%'}>Yanis Karim</Text>
                    </Stack>

                    <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} >
                        <Stack direction={'row'} justifyContent={'space-between'} width={'50%'}>
                            <Text >Type de consultation</Text>
                            <Text >:</Text>
                        </Stack>
                        <Text width={'50%'}>Présentiel</Text>
                    </Stack>

                    <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} >
                        <Stack direction={'row'} justifyContent={'space-between'} width={'50%'}>
                            <Text >Patient régulier</Text>
                            <Text >:</Text>
                        </Stack>
                        <Text width={'50%'}>Non</Text>
                    </Stack>

                    <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} >
                        <Stack direction={'row'} justifyContent={'space-between'} width={'50%'}>
                            <Text >Contrôle</Text>
                            <Text >:</Text>
                        </Stack>
                        <Text width={'50%'}>Non</Text>
                    </Stack>

                    <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} >
                        <Stack direction={'row'} justifyContent={'space-between'} width={'50%'}>
                            <Text >Motif de la consultation</Text>
                            <Text >:</Text>
                        </Stack>
                        <Text width={'50%'}>Détartrage</Text>
                    </Stack>

                    <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} >
                        <Stack direction={'row'} justifyContent={'space-between'} width={'50%'}>
                            <Text >Date rendez-vous</Text>
                            <Text >:</Text>
                        </Stack>
                        <Text width={'50%'}>2023-05-11</Text>
                    </Stack>

                    <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} >
                        <Stack direction={'row'} justifyContent={'space-between'} width={'50%'}>
                            <Text >heure de rendez-vous</Text>
                            <Text >:</Text>
                        </Stack>
                        <Text width={'50%'}>11:30</Text>
                    </Stack>
                        
                </Stack>
                <Divider/>
                <Heading  size='sm'>Renseignements médicaux</Heading>
                <Text>Non précisé</Text>
                
            
            </ModalBody>
            <Divider/>
            <ModalFooter justifyContent={'space-around'}>
                <SupprRdvModal/>
                <Button leftIcon={<CalendarIcon />} colorScheme='teal' width={'10em'} >Décaler</Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </>
  )
}

export default InfoRdvModal