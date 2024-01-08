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
import ListBenif from './listBenif/ListBenif';


const ListBenifModal = ({idOrdonnateur, onAddClickModalToDest}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleDelete = () => {
        // Perform the delete action here, e.g., call onDelete
        // ...
        // Close the modal
        onClose();
      };
    
      const handleAddClick = (memberInfo) => {

        onAddClickModalToDest(memberInfo);
        onClose();
      };

  return (
    <>
       <Button onClick={onOpen}>Liste Bénéficiaires</Button>
        <Modal  size={{ base: 'sm', md: '5xl',sm:'sm' }} isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" blockScrollOnMount={false}
        borderRadius="3xl" borderLeft="16px" borderColor="teal.400">
        <ModalOverlay />
        <ModalContent>
           
   
            <ModalBody p={0}>
                 <ListBenif idOrdonnateur={idOrdonnateur} onAddClickListBenToModal={handleAddClick}/>
            
            </ModalBody>

        </ModalContent>
        </Modal>
    </>
  )
}

export default ListBenifModal