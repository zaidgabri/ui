import axios from 'axios';
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  Select,
  Square,
  Stack,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RiBankLine } from 'react-icons/ri';
import Motifs from '../Motifs';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import ListBenifModal from '../ListBenifModal';
import { baseURL } from '../../../../../../utils/useRequest';

const Dest = ({ onDestButtonClick, idOrdonnateur, destinationsBackClicked, destinationsBack }) => {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [rib, setRib] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [montant, setMontant] = useState('');
  const [telephone, setTelephone] = useState('');
  const [id, setId] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [selectedMotif, setSelectedMotif] = useState('');
  const [selectedFee, setSelectedFee] = useState('FEE_CLIENT_ORDERING');
  const [beneficiariesIds, setBeneficiariesIds] = useState([]);
  const [amounts, setAmounts] = useState([]);
  const toast = useToast();

  const [hasExecutedEffect, setHasExecutedEffect] = useState(false);

  useEffect(() => {
    if (!hasExecutedEffect && destinationsBackClicked) {
      setDestinations(destinationsBack);
      setHasExecutedEffect(true);
    }
  }, [destinationsBackClicked, destinationsBack, hasExecutedEffect]);

  const handleCheckboxChange = (value) => {
    setSelectedFee((prevValue) => (prevValue === value ? null : value));
  };

  const handleAddClick = (memberInfo) => {
    setRib(memberInfo.rib);
    setNom(memberInfo.lastName);
    setPrenom(memberInfo.firstName);
    setTelephone(memberInfo.phone);


  };


  const handleButtonClick = () => {
   
    const objetTransfer = {
      customerID: idOrdonnateur,
      motif: selectedMotif,
      feeType: selectedFee,
    };
  
    console.log('des ', destinations);

    onDestButtonClick(objetTransfer, destinations);
  };
  
  const handleAddDestination = async () => {
    if (!selectedBeneficiary && (rib.trim() === '' || nom.trim() === '' || prenom.trim() === '' || montant.trim() === '' || telephone.trim() === '')) {
      toast({
        description: 'Veuillez remplir tous les champs.',
        status: 'error',
        variant: 'top-accent',
        duration: 3000,
        isClosable: true,
        position: 'bottom-left',
      });
      return;
    }

    if (!selectedBeneficiary && rib.length !== 24) {
      toast({
        description: 'Le RIB doit avoir exactement 24 caractères.',
        status: 'error',
        variant: 'top-accent',
        duration: 3000,
        isClosable: true,
        position: 'bottom-left',
      });
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/client/check-customer-sirone-status-by-rib`, {
        rib: rib.trim(),
      });

      const { isBlockedOrExist, customer, message } = response.data;

      if (isBlockedOrExist) {
        const newDestination = {
          rib: customer.rib,
          name: `${customer.firstName} ${customer.lastName}`,
          montant: montant.trim(),
          telephone: telephone.trim(),
          id: customer.id,
        };

        if (isEditing) {
          const updatedDestinations = [...destinations];
          updatedDestinations[editingIndex] = newDestination;
          setDestinations(updatedDestinations);
          setIsEditing(false);
          setEditingIndex(null);
        } else {
          setDestinations((prevDestinations) => [...prevDestinations, newDestination]);
        }

        setRib('');
        setNom('');
        setPrenom('');
        setMontant('');
        setTelephone('');
        setSelectedBeneficiary(null);
        setBeneficiariesIds((prevIds) => [...prevIds, customer.id]);
        setAmounts((prevAmounts) => [...prevAmounts, parseFloat(montant.trim())]);
      } else {
        toast({
          description: message,
          status: 'error',
          variant: 'top-accent',
          duration: 3000,
          isClosable: true,
          position: 'bottom-left',
        });

        setRib('');
        setNom('');
        setPrenom('');
        setMontant('');
        setTelephone('');
        setSelectedBeneficiary(null);
      }
    } catch (error) {
      console.error('Error checking customer status:', error);
      toast({
        description: 'Une erreur s\'est produite lors de la vérification du statut du client.',
        status: 'error',
        variant: 'top-accent',
        duration: 3000,
        isClosable: true,
        position: 'bottom-left',
      });
    }
  };

  const handleDeleteDestination = (index) => {
    setDestinations((prevDestinations) => prevDestinations.filter((_, i) => i !== index));
    setBeneficiariesIds((prevIds) => prevIds.filter((_, i) => i !== index));
    setAmounts((prevAmounts) => prevAmounts.filter((_, i) => i !== index));
  };

  const handleEditDestination = (index) => {
    const destinationToEdit = destinations[index];
    setRib(destinationToEdit.rib);
    const [editedNom, editedPrenom] = destinationToEdit.name.split(' ');
    setNom(editedNom || '');
    setPrenom(editedPrenom || '');
    setMontant(destinationToEdit.montant);
    setTelephone(destinationToEdit.telephone);
    setIsEditing(true);
    setEditingIndex(index);
    setSelectedBeneficiary(null);
  };

  const handleBeneficiarySelect = (selectedRib) => {
    const selectedBeneficiary = destinations.find((destination) => destination.rib === selectedRib);
    setSelectedBeneficiary(selectedBeneficiary);
    setRib('');
    setNom('');
    setPrenom('');
    setMontant('');
    setTelephone('');
  };

  return (
    <Stack textAlign={'center'} bgColor={''}>
      <Text mb={2} fontSize="xl" fontWeight="bold" className="PopB" textAlign={'left'}>
        Remplir les informations :
      </Text>

      <Stack p={5} borderWidth="3px" rounded="lg" borderStyle="dashed" borderColor="teal">
        <HStack justifyContent={'space-between'}>
          <FormControl isRequired>
            <InputGroup>
              <Input
                type="text"
                className="Pop"
                placeholder="RIB du bénéficiaire"
                bgColor={'white'}
                focusBorderColor="whiteAlpha"
                disabled={isLoading || selectedBeneficiary}
                value={selectedBeneficiary ? selectedBeneficiary.rib : rib}
                onChange={(e) => {
                  if (!selectedBeneficiary && e.target.value.length <= 24) {
                    setRib(e.target.value);
                  }
                }}
                maxLength={24}
              />
            </InputGroup>
          </FormControl>

          <ButtonGroup className="Pop" colorScheme="blue" color={'white'} size="md" isAttached variant="outline">
            <ListBenifModal idOrdonnateur={idOrdonnateur} onAddClickModalToDest={handleAddClick} />
            <IconButton aria-label="Ajouter" icon={<AddIcon />} onClick={handleAddDestination} />
          </ButtonGroup>
        </HStack>

        <Stack spacing={8} direction={{ base: 'column', sm: 'row' }}>
          <FormControl id="Nom" isRequired>
            <FormLabel>Nom</FormLabel>
            <Input
              name="lastName"
              type="text"
              placeholder="Nom"
              bgColor={'white'}
              focusBorderColor="whiteAlpha"
              value={selectedBeneficiary ? '' : nom}
              onChange={(e) => !selectedBeneficiary && setNom(e.target.value)}
            />
          </FormControl>

          <FormControl id="Prenom" isRequired>
            <FormLabel>Prénom</FormLabel>
            <Input
              name="firstName"
              type="text"
              placeholder="Prénom"
              bgColor={'white'}
              focusBorderColor="whiteAlpha"
              value={selectedBeneficiary ? '' : prenom}
              onChange={(e) => !selectedBeneficiary && setPrenom(e.target.value)}
            />
          </FormControl>

          <FormControl id="Telephone" isRequired>
            <FormLabel>Téléphone</FormLabel>
            <Input
              name="telephone"
              type="tel"
              placeholder="Téléphone"
              bgColor={'white'}
              focusBorderColor="whiteAlpha"
              value={selectedBeneficiary ? '' : telephone}
              onChange={(e) => !selectedBeneficiary && setTelephone(e.target.value)}
            />
          </FormControl>

          <FormControl id="Montant" isRequired>
            <FormLabel>Montant (Dhs)</FormLabel>
            <Input
              name="montant"
              type="text"
              bgColor={'white'}
              focusBorderColor="whiteAlpha"
              placeholder="Montant"
              value={selectedBeneficiary ? '' : montant}
              onChange={(e) => !selectedBeneficiary && setMontant(e.target.value)}
            />
          </FormControl>
        </Stack>

        {destinations.length !== 0 && (
          <Stack p={5} bgColor="white" mt={4} borderRadius="xl" spacing={5} borderLeft="8px" borderColor="#004C7A">
            {destinations.map((destination, index) => (
              <HStack key={index} p={2} justify="space-between" bgColor="gray.300" borderWidth="1px" borderRadius="lg">
                <HStack>
                  <Square size="10" bg="bg-subtle" borderRadius="lg">
                    <Icon as={RiBankLine} boxSize="8" color="muted" />
                  </Square>
                  <Box textAlign="left" fontSize="sm">
                    <Text className="PopM" color="empahsized" fontWeight="medium">
                      {destination.rib}
                    </Text>
                    <Text className="Pop" color="muted">
                      {destination.name}
                    </Text>
                  </Box>
                </HStack>
                <VStack>
                  <EditIcon
                    boxSize={4}
                    color="muted"
                    cursor="pointer"
                    _hover={{ color: 'teal.600' }}
                    onClick={() => handleEditDestination(index)}
                  />
                  <DeleteIcon
                    mr={2}
                    ml={2}
                    boxSize={4}
                    color="muted"
                    cursor="pointer"
                    _hover={{ color: 'red.600' }}
                    onClick={() => handleDeleteDestination(index)}
                  />
                </VStack>
              </HStack>
            ))}
          </Stack>
        )}
      </Stack>

      <Stack spacing={8} direction={{ base: 'column', sm: 'row' }}>
        <FormControl id="Motif" isRequired>
          <FormLabel>Le Motif pour cette opération</FormLabel>
          <Select
            name="motif"
            placeholder="Motif"
            bgColor={'white'}
            focusBorderColor="whiteAlpha"
            value={selectedMotif}
            onChange={(e) => setSelectedMotif(e.target.value)}
          >
            <Motifs />
          </Select>
        </FormControl>

        <FormControl id="fee" mt={1} isRequired>
          <FormLabel>Réduction des frais de transfert d'argent </FormLabel>
          <CheckboxGroup colorScheme='teal' defaultValue={['FEE_CLIENT_ORDERING']} value={selectedFee}>
            <Stack bgColor={''} mt={3} spacing={[1, 10]} direction={['column', 'row']} justifyContent={"space-between"}>
              <Checkbox size='lg' value='FEE_CLIENT_ORDERING'
                isChecked={selectedFee === 'FEE_CLIENT_ORDERING'}
                onChange={() => handleCheckboxChange('FEE_CLIENT_ORDERING')}
              >
                Client
              </Checkbox>

              <Checkbox size='lg' value='FEE_BENEFICIARY'
                isChecked={selectedFee === 'FEE_BENEFICIARY'}
                onChange={() => handleCheckboxChange('FEE_BENEFICIARY')}>
                Bénéficiaire
              </Checkbox>

              <Checkbox size='lg' value='FEE_SHARED'
                isChecked={selectedFee === 'FEE_SHARED'}
                onChange={() => handleCheckboxChange('FEE_SHARED')}
              >
                Partagé
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
      </Stack>

      <Button className="Pop" px={12} mt={6} colorScheme="blue" color={'white'} size="md" onClick={handleButtonClick}>
        Suivant
      </Button>
    </Stack>
  );
};

export default Dest;
