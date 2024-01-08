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
} from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';

const DetailsBtn = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    // Perform the delete action here, e.g., call onDelete
    // ...
    // Close the modal
    onClose();
  };

  return (
    <>
      <Button variant="link" size="sm" colorScheme="blue" onClick={onOpen}>
        Details
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
          <ModalHeader>Details</ModalHeader>
          <ModalCloseButton />
          <Divider />

          <ModalBody>
            <Heading size='sm' mb={2}>
              Voici les informations concernant cette opération :
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
                <Text>{data.transferedAmount} Dhs</Text>
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

             
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailsBtn;


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


// const DetailsBtn = ({data}) => {

//     const { isOpen, onOpen, onClose } = useDisclosure()

//     const handleDelete = () => {
//         // Perform the delete action here, e.g., call onDelete
//         // ...
//         // Close the modal
//         onClose();
//       };
    

//   return (
//     <>
//        <Button variant="link" size="sm" colorScheme="blue" onClick={onOpen}>Details</Button>
//         <Modal size={{ base: 'sm', md: 'lg',sm:'sm' }} isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" blockScrollOnMount={false}
//         borderRadius="3xl" borderLeft="16px" borderColor="teal.400">
//         <ModalOverlay />
//         <ModalContent>
//             <ModalHeader >Details</ModalHeader>
//             <ModalCloseButton />
//             <Divider/>
   
//             <ModalBody>
//                 <Heading  size='sm' mb={2}>Voici les informations concernant cette opérations :</Heading>
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

            
//         </ModalContent>
//         </Modal>
//     </>
//   )
// }

// export default DetailsBtn