import React from 'react';
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
  useToast,
} from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';
import axios from 'axios';
import { baseURLtransfert } from '../../../utils/useRequest';

const RestituerBtn = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast(); // Initialize the useToast hook


  const handleRestituer = async () => {
    try {
      // Make a GET request to the restitution API endpoint
      const response = await axios.put(`${baseURLtransfert}/transfers/restitute/${data.taransferID}`);
     
      toast({
        title: 'Restitution réussie',
        description: `Le transfert avec l'ID ${data.taransferID} a été restitué avec succès.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      // Afficher un toast d'erreur
      toast({
        title: 'Erreur lors de la restitution',
        description: `Une erreur s'est produite lors de la restitution du transfert avec l'ID ${data.taransferID}. Veuillez réessayer.`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });

      // Gérer les erreurs
      console.error('Erreur lors de la restitution :', error);
    } finally {
      onClose();
    }
  };

  return (
    <>
      <Button variant="link" size="sm" onClick={onOpen}>
        Restituer
      </Button>
      <Modal
        size={{ base: 'sm', md: 'lg', sm: 'sm' }}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        blockScrollOnMount={false}
        borderRadius="3xl"
        borderLeft="16px"
        borderColor="teal.400"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Restituer</ModalHeader>
          <ModalCloseButton />
          <Divider />

          <ModalBody>
            <Heading size='sm' mb={2}>
              Êtes-vous sûr de vouloir restituer ce virement ?
            </Heading>
            <Stack spacing={2}>
              <Stack direction={'row'}>
                <Text>Type :</Text>
                <Text>{data.type}</Text>
              </Stack>

              <Stack direction={'row'}>
                <Text>État :</Text>
                <Text>{data.state}</Text>
              </Stack>

              <Stack direction={'row'}>
                <Text>Montant Transféré :</Text>
                <Text>{data.transferedAmount}</Text>
              </Stack>

              <Stack direction={'row'}>
                <Text>ID de Transfert :</Text>
                <Text>{data.taransferID}</Text>
              </Stack>

              <Stack direction={'row'}>
                <Text>Date Initiée :</Text>
                <Text>{data.initatedDate}</Text>
              </Stack>

              <Stack direction={'row'}>
                <Text>Message :</Text>
                <Text>{data.message}</Text>
              </Stack>

              <Stack direction={'row'}>
                <Text>Expéditeur :</Text>
                <Text>{data.sender.fullName} (CIN: {data.sender.cin})</Text>
              </Stack>

              <Stack direction={'row'}>
                <Text>Bénéficiaires :</Text>
                <Stack spacing={1}>
                  {data.recipient.map((recipient, index) => (
                    <Text key={index}>{recipient.fullName} (CIN: {recipient.cin})</Text>
                  ))}
                </Stack>
              </Stack>

              <Stack direction={'row'}>
                <Text>Trouvé :</Text>
                <Text>{data.isFound ? 'Oui' : 'Non'}</Text>
              </Stack>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button width={'10em'} variant={'solid'} mr={3} onClick={onClose}>
              Annuler
            </Button>
            <Button colorScheme="teal" width={'10em'} onClick={handleRestituer}>
              Restituer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RestituerBtn;




// import React from 'react'
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     useDisclosure,
//     Button,
//     Text,
//     Divider,
//     Heading,
//     Stack,
//     VStack,
//     HStack,
//     IconButton,
//     Badge,
//   } from '@chakra-ui/react'
// import { FiTrash2 } from 'react-icons/fi';


// const RestituerBtn = ({data}) => {

//     const { isOpen, onOpen, onClose } = useDisclosure()

//     const handleReset = () => {
//         // Perform the delete action here, e.g., call onDelete
//         // ...
//         // Close the modal
//         onClose();
//       };
    

//   return (
//     <>
//        <Button variant="link" size="sm" onClick={onOpen}>Restituer</Button>
//         <Modal size={{ base: 'sm', md: 'lg',sm:'sm' }} isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" blockScrollOnMount={false}
//         borderRadius="3xl" borderLeft="16px" borderColor="teal.400">
//         <ModalOverlay />
//         <ModalContent>
//             <ModalHeader >Restituer</ModalHeader>
//             <ModalCloseButton />
//             <Divider/>
   
//             <ModalBody>
//                 <Heading  size='sm' mb={2}>êtes-vous sûr de vouloir restituer ce virement ?</Heading>
//                 <Stack spacing={-4} >

//                         <Stack direction={'row'}>
//                             <Text>Le Nom Complet :</Text>
//                             <Text>name</Text>
//                         </Stack>

                    
//                         <Stack direction={'row'}>
//                             <Text>CIN :</Text>
//                             <Text>cin</Text>
//                         </Stack>
                        
//                         <Stack direction={'row'}>
//                             <Text>RIB :</Text>
//                             <Text>rib</Text>
//                         </Stack>
    
//                 </Stack>
               
            
//             </ModalBody>

//             <ModalFooter>
//                 <Button width={'10em'} variant={'solid'} mr={3} onClick={onClose}>
//                     Annuler
//                 </Button>
//                 <Button colorScheme="teal" width={'10em'} onClick={handleReset}>
//                     Restituer
//                 </Button>
//             </ModalFooter>
//         </ModalContent>
//         </Modal>
//     </>
//   )
// }

// export default RestituerBtn