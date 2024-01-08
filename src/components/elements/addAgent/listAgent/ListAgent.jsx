import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { MemberTable } from './MemberTable';
import { members } from './data';
import { Link } from 'react-router-dom';
import { IoAddSharp } from "react-icons/io5";
import { AddIcon } from '@chakra-ui/icons';



const ITEMS_PER_PAGE = 4;

const ListAgent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  const filteredMembers = members.filter((member) =>
    member.cin.toLowerCase().includes(searchQuery.toLowerCase())
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
            
            <Link to="/dash/ajouter-agent" aria-label="Home">
                <IconButton aria-label="Go back" icon={<AddIcon boxSize="6"  />} borderRadius="full" boxSize="12" bgColor="teal.500" color="white" _hover={{ bgColor: 'teal.600' }} _active={{ bgColor: 'teal.700' }} />
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
                Agents
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
            <MemberTable members={filteredMembers} startIndex={startIndex} endIndex={endIndex} />
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

export default ListAgent;
