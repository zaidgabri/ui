import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { MemberTable } from './MemberTable';
import { baseURL } from '../../../../../../utils/useRequest';

const ITEMS_PER_PAGE = 5;

const ListBenif = ({ idOrdonnateur, onAddClickListBenToModal }) => {
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  const handleAddClick = (memberInfo) => {

    onAddClickListBenToModal(memberInfo);
    console.log('Add clicked for:', memberInfo);
  };

  // Use useEffect to fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/client/get-by-customer-to-customer-id/${idOrdonnateur}`);
        const data = response.data;

        // Log the fetched data to the console
        console.log('Fetched Data:', data);

        // Assuming the response structure contains an array of members
        setMembers(data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [idOrdonnateur]);

  const filteredMembers = members.filter((member) =>
    member.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalItems = filteredMembers.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <Container maxW={'5xl'} alignItems={'center'} justifyContent={'center'}>
      <Stack spacing="5">
        <Box pt="5">
          <Stack alignItems={'center'} direction={{ base: 'column', md: 'row' }} justify="space-between">
            <Text fontSize="lg" fontWeight="medium">
              Liste des Bénéficiaires
            </Text>
            <InputGroup maxW="xs">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiSearch} color="muted" boxSize="5" />
              </InputLeftElement>
              <Input
                placeholder="Chercher avec Nom"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </InputGroup>
          </Stack>
        </Box>
        <Box overflowY="auto">
          <MemberTable members={filteredMembers} startIndex={startIndex} endIndex={endIndex} onAddClick={handleAddClick}/>
        </Box>
        <Box px={{ base: '4', md: '6' }} pb="5">
          <HStack spacing="3" justify="space-between">
            {!isMobile && (
              <Text color="muted" fontSize="sm">
                Affichage de {startIndex + 1} à {Math.min(endIndex, totalItems)} sur {totalItems} résultats
              </Text>
            )}
            <ButtonGroup
              spacing="3"
              justifyContent="space-between"
              width={{ base: 'full', md: 'auto' }}
              variant="secondary"
            >
              <Button
                color={'white'}
                bg="gray.700"
                _hover={{ bg: 'gray.600' }}
                _selected={{ bg: 'gray.500' }}
                _active={{ bg: 'gray.400' }}
                onClick={handlePrevious}
                isDisabled={currentPage === 1}
              >
                Précédent
              </Button>
              <Button
                color={'white'}
                bg="gray.700"
                _hover={{ bg: 'gray.600' }}
                _selected={{ bg: 'gray.500' }}
                _active={{ bg: 'gray.400' }}
                onClick={handleNext}
                isDisabled={currentPage === totalPages}
              >
                Suivant
              </Button>
            </ButtonGroup>
          </HStack>
        </Box>
      </Stack>
    </Container>
  );
};

export default ListBenif;


// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Container,
//   HStack,
//   Icon,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Stack,
//   Text,
//   useBreakpointValue,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import { FiSearch } from 'react-icons/fi';
// import { MemberTable } from './MemberTable';
// import { members } from './data';

// const ITEMS_PER_PAGE = 5;

// const ListBenif = ({idOrdonnateur}) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState('');

//   const isMobile = useBreakpointValue({
//     base: true,
//     md: false,
//   });

//   const filteredMembers = members.filter((member) =>
//     member.cin.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const totalItems = filteredMembers.length;
//   const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;

//   const handlePrevious = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const handleNext = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//   };

//   return (
//     <Container maxW={'5xl'}  alignItems={"center"} justifyContent={"center"} >
    
//         <Stack spacing="5">
//           <Box  pt="5">
//             <Stack alignItems={'center'} direction={{ base: 'column', md: 'row' }} justify="space-between">
//               <Text fontSize="lg" fontWeight="medium" >
//                 Liste des Bénéficiaires
//               </Text>
//               <InputGroup maxW="xs">
//                 <InputLeftElement pointerEvents="none">
//                   <Icon as={FiSearch} color="muted" boxSize="5" />
//                 </InputLeftElement>
//                 <Input
//                   placeholder="Chercher avec CIN"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </InputGroup>
//             </Stack>
//           </Box>
//           <Box overflowY="auto">
//             <MemberTable members={filteredMembers} startIndex={startIndex} endIndex={endIndex} />
//           </Box>
//           <Box px={{ base: '4', md: '6' }} pb="5">
//             <HStack spacing="3" justify="space-between">
//               {!isMobile && (
//                 <Text color="muted" fontSize="sm">
//                   Affichage de {startIndex + 1} à {Math.min(endIndex, totalItems)} sur {totalItems} résultats
//                 </Text>
//               )}
//               <ButtonGroup
//                 spacing="3"
//                 justifyContent="space-between"
//                 width={{ base: 'full', md: 'auto' }}
//                 variant="secondary"
//               >
//                 <Button
//                   color={'white'}
//                   bg="gray.700"
//                   _hover={{ bg: 'gray.600' }}
//                   _selected={{ bg: 'gray.500' }}
//                   _active={{ bg: 'gray.400' }}
//                   onClick={handlePrevious}
//                   isDisabled={currentPage === 1}
//                 >
//                   Précédent
//                 </Button>
//                 <Button
//                   color={'white'}
//                   bg="gray.700"
//                   _hover={{ bg: 'gray.600' }}
//                   _selected={{ bg: 'gray.500' }}
//                   _active={{ bg: 'gray.400' }}
//                   onClick={handleNext}
//                   isDisabled={currentPage === totalPages}
//                 >
//                   Suivant
//                 </Button>
//               </ButtonGroup>
//             </HStack>
//           </Box>
//         </Stack>
      
//     </Container>
//   );
// };

// export default ListBenif;
