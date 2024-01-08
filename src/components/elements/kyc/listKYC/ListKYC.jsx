import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { MemberTable } from './MemberTable';
import { Link, useNavigate } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { baseURL } from '../../../../utils/useRequest';


const ITEMS_PER_PAGE = 4;

const ListKYC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [members, setMembers] = useState([]);
  const [idNumber, setIdNumber] = useState('');
  const navigate = useNavigate();

  const toast = useToast();


  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  
 

  // Use useEffect to fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/client/GetAllKyc`);
        const data = response.data;

       setMembers(data || []);
      } catch (error) {
        setMembers(this.data || []);
        toast({
          description: 'Erreur lors de la récupération des données',
          status: 'info',
          duration: 5000,
          isClosable: true,
        });
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredMembers = members.filter((member) =>
    member.idNumber.toLowerCase().includes(searchQuery.toLowerCase())
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
    <>
       <Stack maxW={'7xl'} mx={4} mb={2} mt={2} alignItems={"flex-end"}>
            
            <Link to="/dash/ajouterToKyc" aria-label="Home">
                <IconButton aria-label="Go back" icon={<AddIcon boxSize="6"  />}  borderRadius="full" boxSize="12" bgColor="teal.500" color="white" _hover={{ bgColor: 'teal.600' }} _active={{ bgColor: 'teal.700' }} />
            </Link>   
           
        </Stack>
    
    <Container maxW={'7xl'} py={{ base: '6', md: '6' }} alignItems={"center"} justifyContent={"center"} >

      <Box
        // bg="bg-surface"
        bg="white"
        boxShadow={useColorModeValue('md', 'md-dark')}
        borderRadius={useBreakpointValue({ base: 'none', md: 'lg' })}
      >
        <Stack spacing="5">
          <Box px={{ base: '4', md: '6' }} pt="5">
            <Stack alignItems={'center'} direction={{ base: 'column', md: 'row' }} justify="space-between">
              <Text fontSize="lg" fontWeight="medium" >
                le référentiel des prospects 
              </Text>
              <InputGroup maxW="xs">
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiSearch} color="muted" boxSize="5" />
                </InputLeftElement>
                <Input
                  placeholder="Chercher avec CIN"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </InputGroup>
            </Stack>
          </Box>
          <Box overflowY="auto">
            <MemberTable members={filteredMembers} startIndex={startIndex} endIndex={endIndex}  />
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
      </Box>
    </Container>
    </>
  );
};

export default ListKYC;
