import React, { useState, useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Checkbox,
  useBreakpointValue,
  Button,
  Text,
  useToast,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';
import CardVirement from './CardVirement';
import { baseURLtransfert } from '../../../utils/useRequest';

const Virement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [filteredTransfers, setFilteredTransfers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const toast = useToast(); 


  useEffect(() => {
    const updatedFilteredTransfers = filteredTransfers.filter((transfer) => {
      return selectedStatuses.length === 0 || selectedStatuses.includes(transfer.state);
    });
    setFilteredTransfers(updatedFilteredTransfers);
    setCurrentPage(1);
  }, [selectedStatuses]);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    const totalPages = Math.ceil(filteredTransfers.length / 6);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleCheckboxChange = (state) => {
    setSelectedStatuses((prevStatuses) => {
      if (prevStatuses.includes(state)) {
        return prevStatuses.filter((s) => s !== state);
      } else {
        return [...prevStatuses, state];
      }
    });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${baseURLtransfert}/transfers/getTransferHistory/${searchValue}`);
      const apiTransfersData = response.data;
      console.log(' data:', apiTransfersData);

      setFilteredTransfers(apiTransfersData);
      setCurrentPage(1);

      // Afficher un toast de succès
      toast({
        title: 'Recherche réussie',
        description: 'Les transferts ont été récupérés avec succès.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      // Afficher un toast d'erreur
      toast({
        description: 'Une erreur s\'est produite lors de la récupération des transferts.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setFilteredTransfers([]);
      // Gérer les erreurs
      console.error('Erreur lors de la recherche de données :', error);
    }
  };

  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;

  const displayedTransfers = filteredTransfers.slice(startIndex, endIndex);

  return (
    <Stack spacing={{ base: '8', lg: '6' }} position="relative">
      <Box
        bg="linear-gradient(to right, rgba(5, 106, 167, 0.7), rgba(0, 128, 128, 0.7))"
        p="4"
        borderRadius="lg"
        backdropFilter="blur(8px)"
        boxShadow="lg"
        mx={4}
      >
        <Stack
          spacing="4"
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          align={{ base: 'start', lg: 'center' }}
        >
          <Stack spacing="1">
            <Heading
              size={useBreakpointValue({ base: 'xs', lg: 'md' })}
              fontWeight="medium"
              color="white"
            >
              La restitution des transferts
            </Heading>
          </Stack>

        <HStack>
          <InputGroup maxW="xs">
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="muted" boxSize="5" />
            </InputLeftElement>
            <Input
              background={'white'}
              placeholder="Chercher avec CIN"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </InputGroup>
          <Button
            color={'white'}
            bg="gray.700"
            px={8}
            _hover={{ bg: 'gray.600' }}
            _selected={{ bg: 'gray.500' }}
            _active={{ bg: 'gray.400' }}
            onClick={handleSearch}
            isDisabled={!searchValue.trim()}
          >
            Rechercher
          </Button>
          </HStack>
        </Stack>
      </Box>

      <Box mx={4}>
        <Stack py={5} borderWidth="3px" rounded="lg" borderStyle="dashed">
          {displayedTransfers.length === 0 ? (
            <Text>No results found.</Text>
          ) : (
            <SimpleGrid columns={2} spacing={5}>
              {displayedTransfers.map((transfer) => (
                <CardVirement key={transfer.id} data={transfer} />
              ))}
            </SimpleGrid>
          )}
        </Stack>
      </Box>

      <HStack mx={4} mb={4} spacing="3" justifyContent="space-between">
        <Box mx={4}>
          <Stack direction={{ base: 'column', lg: 'row' }} align="center" spacing="4">
            <Text>Statuts:</Text>
            {['A servir', 'Servie', 'Extourné', 'Restitué', 'Bloqué', 'Débloqué', 'Déshérence'].map(
              (state) => (
                <Checkbox
                  key={state}
                  isChecked={selectedStatuses.includes(state)}
                  onChange={() => handleCheckboxChange(state)}
                >
                  {state}
                </Checkbox>
              )
            )}
          </Stack>
        </Box>

        <Stack direction="row" spacing={4}>
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
            isDisabled={currentPage * 6 >= filteredTransfers.length}
          >
            Suivant
          </Button>
        </Stack>
      </HStack>
    </Stack>
  );
};

export default Virement;

