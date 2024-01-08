import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  FormControl,
  HStack,
  Icon,
  Input,
  InputGroup,
  Spinner,
  Stack,
  Text,
  Button,
  Square,
  VStack,
  useToast,
  Select,
} from '@chakra-ui/react';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { IoMdArrowDropright } from 'react-icons/io';
import { baseURL } from '../../../../../../utils/useRequest';
import { Link } from 'react-router-dom';

const Ordonnateur = ({ onOrdonnateurButtonClick }) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [cin, setCin] = useState('');
  const [selectedIdType, setSelectedIdType] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [kycAbsent, setKycAbsent] = useState(false);
  const [customerData, setCustomerData] = useState(null);

 

  const handleButtonClick = async () => {

    if (!selectedIdType) {
      toast({
        description: "Veuillez sélectionner le type de pièce d'identité",
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      return; // Arrête l'exécution si aucune option n'est sélectionnée
    }
  
    
    setIsLoading(true);

    try {
      console.log('Sending POST request...');
      const response = await axios.post(`${baseURL}/client/find-kyc`, {
        identity: cin,
      });

      console.log("API Response:", response.data);

      if (response.data.found && !response.data.isExpired ) {
        toast({
          description: "Le numéro d'identité est valide.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setCustomerData(response.data);
        console.log("customerData:", customerData);

        //Kyc Expired 
      } else if(response.data.found && response.data.isExpired ) {
        // Display an error message or take appropriate action
        toast({
          description: response.data.message,
          status: 'warning',
          duration: 5000,
          isClosable: true,
        });
        setCustomerData(null);
        setIdNumber(cin);

      } else {
        
        
        toast({
          description: response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        setKycAbsent(true);
        setCustomerData(null);
        setIdNumber('');
      }
     } catch (error) {
      console.error('Error initiating transfer:', error);
    
      toast({
        description: 'Une erreur s\'est produite lors de l\'initiation du transfert.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
      console.log('Request completed.');
    }
  };

  return (
    <Stack textAlign={'center'} bgColor={''}>
      <Text mb={2} fontSize="xl" fontWeight="bold" className="PopB" textAlign={'left'}>
         Saisir les informations du  client donneur
      </Text>

      <Stack mt={4}>
        
        <HStack justifyContent={'space-between'}>

        <FormControl id="idType" isRequired>
          <Select
            placeholder="Type de pièce d'identité"
            _placeholder={{ color: 'gray.500' }}
            backgroundColor={"white"}
            value={selectedIdType}
            onChange={(e) => setSelectedIdType(e.target.value) }

          >
            <option value="Cin">Cin</option>
            <option value="Passport">Passport</option>
          </Select>
        </FormControl>

          <FormControl isRequired>
            <InputGroup>
              <Input
                type="text"
                className="Pop"
                placeholder="le numéro de la pièce d’identité"
                bgColor={'white'}
                focusBorderColor="whiteAlpha"
                value={cin}
                onChange={(e) => setCin(e.target.value)}
                disabled={isLoading}
              />
            </InputGroup>
          </FormControl>

          <Button
            className="Pop"
            colorScheme="blue"
            color={'white'}
            size="md"
            px={12}
            onClick={handleButtonClick}
            disabled={isLoading}
          >
            {isLoading ? <Spinner size="sm" /> : 'Rechercher'}
          </Button>
        </HStack>

        {
          customerData ? (
            <HStack mt={5} p={2} justify="space-between" bgColor="gray.300" borderWidth="1px" borderRadius="lg">
              <HStack>
                <Square size="12" bg="bg-subtle" borderRadius="lg">
                  <Icon as={HiOutlineUserCircle} boxSize="10" color="muted" />
                </Square>
                <Box textAlign="left" fontSize="sm">
                  <Text className="PopM" color="empahsized" fontWeight="medium">
                    {customerData.kyc.title} {customerData.kyc.firstName} {customerData.kyc.lastName}
                  </Text>
                  <Text className="Pop" color="muted">
                   {customerData.kyc.idType}: {customerData.kyc.idNumber}
                  </Text>
                </Box>
              </HStack>
              <VStack>
                <Icon as={IoMdArrowDropright} boxSize="10" color="muted" cursor="pointer" _hover={{ color: 'teal.600' }} onClick={() => onOrdonnateurButtonClick(customerData.kyc)} />
              </VStack>
            </HStack>
          ) : kycAbsent ? (
            <HStack mt={5} p={2} justify="space-between" bgColor="gray.300" borderWidth="1px" borderRadius="lg">
              <HStack>
                <Square size="12" bg="bg-subtle" borderRadius="lg">
                  <Icon as={HiOutlineUserCircle} boxSize="10" color="muted" />
                </Square>
                <Box textAlign="left" fontSize="sm">
                  <Text className="PopM" color="empahsized" fontWeight="medium">
                    Il faut créer un nouveau KYC pour cette personne
                  </Text>
                  <Text className="Pop" color="muted">
                    {/* Identity: {customerData.kyc.idNumber} */}
                  </Text>
                </Box>
              </HStack>
              <VStack>
              <Link to={`/dash/ajouterToKyc`} aria-label="Home">
                <Icon as={IoMdArrowDropright} boxSize="10" color="muted" cursor="pointer" _hover={{ color: 'teal.600' }} />
              </Link>
              </VStack>
            </HStack>
          ): idNumber && (
            <HStack mt={5} p={2} justify="space-between" bgColor="gray.300" borderWidth="1px" borderRadius="lg">
              <HStack>
                <Square size="12" bg="bg-subtle" borderRadius="lg">
                  <Icon as={HiOutlineUserCircle} boxSize="10" color="muted" />
                </Square>
                <Box textAlign="left" fontSize="sm">
                  <Text className="PopM" color="empahsized" fontWeight="medium">
                    Il faut mise à jour KYC de cette personne
                  </Text>
                  <Text className="Pop" color="muted">
                    {/* Identity: {customerData.kyc.idNumber} */}
                  </Text>
                </Box>
              </HStack>
              <VStack>
                <Link to={`/dash/ajouter-to-kyc/${idNumber}`} aria-label="Home">
                  <Icon as={IoMdArrowDropright} boxSize="10" color="muted" cursor="pointer" _hover={{ color: 'teal.600' }} />
                </Link>
              </VStack>
            </HStack>
          )  
        }

      </Stack>
    </Stack>
  );
};

export default Ordonnateur;

