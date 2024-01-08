
 import {
  Button,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  useBreakpointValue,
  Box,
  VStack,
  Select,
  useToast
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { GiRegeneration } from "react-icons/gi";

import { MdAdd } from "react-icons/md";
import ListKYC from './listKYC/ListKYC'
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { baseURL } from '../../../utils/useRequest';
import { useParams } from 'react-router-dom';



const AddToKYC = () => {



  const toast = useToast(); // Utilisez la fonction useToast
  const { id } = useParams();


  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    idType: '',
    countryOfIssue: '',
    idNumber: '',
    idExpirationDate: '',
    dateOfBirth: '',
    profession: '',
    nationality: '',
    countryOfAddress: '',
    legalAddress: '',
    city: '',
    gsm: '',
    email: '',
  });

  useEffect(() => {
    if (id && id.length > 0) {
      const fetchData = async () => {
        try {
          const response = await axios.post(`${baseURL}/client/find-kyc`, {
            identity: id,
          });

          // Handle the response as needed
          console.log('KYC found successfully:', response.data);

          // Set formData with KYC data
          setFormData({
            title: response.data.kyc.title || '',
            firstName: response.data.kyc.firstName || '',
            lastName: response.data.kyc.lastName || '',
            idType: response.data.kyc.idType || '',
            countryOfIssue: response.data.kyc.countryOfIssue || '',
            idNumber: response.data.kyc.idNumber || '',
            idExpirationDate: response.data.kyc.idExpirationDate || '',
            dateOfBirth: response.data.kyc.dateOfBirth || '',
            profession: response.data.kyc.profession || '',
            nationality: response.data.kyc.nationality || '',
            countryOfAddress: response.data.kyc.countryOfAddress || '',
            legalAddress: response.data.kyc.legalAddress || '',
            city: response.data.kyc.city || '',
            gsm: response.data.kyc.gsm || '',
            email: response.data.kyc.email || '',
          });

          // Further processing based on the response data
          // ...

        } catch (error) {
          // Handle errors
          console.error('Error finding KYC:', error.message);
          toast({
            description: 'Une erreur s\'est produite lors de la recherche KYC.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      };

      fetchData();
    }
  }, [id, toast]);

  const handleSaveModif = async () => {

    try {
      // Assuming the identity is stored in the formData with the key 'idNumber'
      const response = await axios.put(`${baseURL}/client/updateKYC/${id}`, {
        title: formData.title,
        firstName: formData.firstName,
        lastName: formData.lastName,
        idType: formData.idType,
        countryOfIssue: formData.countryOfIssue,
        idNumber: formData.idNumber,
        idExpirationDate: formData.idExpirationDate,
        dateOfBirth: formData.dateOfBirth,
        profession: formData.profession,
        nationality:formData.nationality,
        countryOfAddress: formData.countryOfAddress,
        legalAddress: formData.legalAddress,
        city:formData.city,
        gsm: formData.gsm,
        email: formData.email,
      });


      setFormData({
        title: '',
        firstName: '',
        lastName: '',
        idType: '',
        countryOfIssue: '',
        idNumber: '',
        idExpirationDate: '',
        dateOfBirth: '',
        profession: '',
        nationality: '',
        countryOfAddress: '',
        legalAddress: '',
        city: '',
        gsm: '',
        email: '',
      });

      toast({
        description: response.data.message,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      // Handle the response as needed
      console.log('KYC found successfully:', response.data);

      

    } catch (error) {
      // Handle errors
      console.error('Error finding KYC:', error.message);
      toast({
        description: 'Une erreur s\'est produite lors de la recherche KYC.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const ajouterToKYC = async () => {
    // Validation pour s'assurer que tous les champs ne sont pas vides
    if (Object.values(formData).some(value => value === '')) {
      toast({
        description: "Veuillez remplir tous les champs.",
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
  
    try {
      // Validation supplémentaire pour s'assurer que chaque champ requis est non vide
      if (
        formData.title === '' ||
        formData.firstName === '' ||
        formData.lastName === '' ||
        formData.idType === '' ||
        formData.countryOfIssue === '' ||
        formData.idNumber === '' ||
        formData.idExpirationDate === '' ||
        formData.dateOfBirth === '' ||
        formData.profession === '' ||
        formData.nationality === '' ||
        formData.countryOfAddress === '' ||
        formData.legalAddress === '' ||
        formData.city === '' ||
        formData.gsm === '' ||
        formData.email === ''
      ) {
        toast({
          description: "Veuillez remplir tous les champs requis.",
          status: 'warning',
          duration: 5000,
          isClosable: true,
        });
        return;
      }
  
      const response = await axios.post(`${baseURL}/client/addKYC`, formData);
  
      // Handle the response as needed, e.g., show a success message
      console.log('KYC added successfully:', response.data);
  
      if (response.data.isAdded) {
        setFormData({
          title: '',
          firstName: '',
          lastName: '',
          idType: '',
          countryOfIssue: '',
          idNumber: '',
          idExpirationDate: '',
          dateOfBirth: '',
          profession: '',
          nationality: '',
          countryOfAddress: '',
          legalAddress: '',
          city: '',
          gsm: '',
          email: '',
        });
  
        toast({
          description: response.data.message,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } else {
        // Display an error message or take appropriate action
        toast({
          description: response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error adding KYC:', error.message);
      toast({
        description: 'Une erreur s\'est produite lors de l\'ajout du client Prospect.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  



  return (
    <>

      <Stack maxW={'7xl'} mx={4} mb={8} mt={2} alignItems={"flex-start"}>
            
            <Link to="/dash/liste-prospects" aria-label="Home">
                <IconButton aria-label="Go back" icon={<ArrowBackIcon boxSize="8"  />} borderRadius="full" boxSize="12" variant={'solid'}  />
            </Link>   
            
           
        </Stack>
      <Stack
        spacing={4}
        maxW={'6xl'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        mx={4}
        mb={8}
        >

        <Box
        bg="linear-gradient(to right, rgba(5, 106, 167, 0.7), rgba(0, 128, 128, 0.7))" // Teal gradient with transparency
        p="4"
        borderRadius="lg"
        backdropFilter="blur(8px)" // Adjust the blur value as needed
        boxShadow="lg">

        <Stack spacing="4" direction={{ base: 'column', lg: 'row' }} justify="space-between" align={{ base: 'start', lg: 'center' }}
        >
            <Stack spacing="1" >
            <Heading
                size={useBreakpointValue({ base: 'xs', lg: 'md' })}
                fontWeight="medium"
                color={"white"}>
                Ajouter Un Client Prospect
            </Heading>
            </Stack>
            <IconButton  icon={<MdAdd fontSize="1.50rem" />} variant={"solid"} aria-label="Générer" onClick={ajouterToKYC}/>

        </Stack>
        </Box>
 
        
        
        <HStack>
        <FormControl id="title" isRequired>
          <FormLabel>Titre (M. / Mme)</FormLabel>
          <Select
            placeholder="Sélectionnez le titre"
            _placeholder={{ color: 'gray.500' }}
            onChange={handleChange}
            value={formData.title}
          >
            <option value="M.">M.</option>
            <option value="Mme.">Mme.</option>
            <option value="Dr.">Dr.</option>
          </Select>
        </FormControl>

        <FormControl id="firstName" isRequired>
          <FormLabel>Prénom</FormLabel>
          <Input
            placeholder="Entrez le prénom"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={handleChange}
            value={formData.firstName}
          />
        </FormControl>

        <FormControl id="lastName" isRequired>
          <FormLabel>Nom</FormLabel>
          <Input
            placeholder="Entrez le nom"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={handleChange}
            value={formData.lastName}
          />
        </FormControl>

        </HStack>

        <HStack>
        <FormControl id="idType" isRequired>
          <FormLabel>Type de pièce d'identité</FormLabel>
          <Select
            placeholder="Sélectionnez le type de pièce"
            _placeholder={{ color: 'gray.500' }}
            onChange={handleChange}
            value={formData.idType}
          >
            <option value="Cin">Cin</option>
            <option value="Passport">Passport</option>
          </Select>
        </FormControl>

        <FormControl id="countryOfIssue" isRequired>
          <FormLabel>Pays d’émission</FormLabel>
          <Select
            placeholder="Sélectionnez le pays d'émission"
            _placeholder={{ color: 'gray.500' }}
            onChange={handleChange}
            value={formData.countryOfIssue}
          >
            <option value="ma">Maroc</option>
            <option value="qa">Qatar</option>
            <option value="usa">USA</option>
          </Select>
        </FormControl>
        </HStack>

        <HStack>
        <FormControl id="idNumber" isRequired>
          <FormLabel>N° pièce d'identité</FormLabel>
          <Input
            placeholder="Entrez le numéro de la pièce d'identité"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={handleChange}
            value={formData.idNumber}
          />
        </FormControl>

        <FormControl id="idExpirationDate" isRequired>
          <FormLabel>Validité pièce d'identité</FormLabel>
          <Input
            placeholder="AAAA-MM-JJ"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={handleChange}
            value={formData.idExpirationDate}
          />
        </FormControl>

        <FormControl id="dateOfBirth" isRequired>
          <FormLabel>Date de naissance</FormLabel>
          <Input
            placeholder="AAAA-MM-JJ"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={handleChange}
            value={formData.dateOfBirth}
          />
        </FormControl>
        </HStack>

        <HStack>
        <FormControl id="profession" isRequired>
          <FormLabel>Profession</FormLabel>
          <Select
            placeholder="Sélectionnez la profession"
            _placeholder={{ color: 'gray.500' }}
            onChange={handleChange}
            value={formData.profession}
          >
            <option value="etudiant">Etudiant</option>
            <option value="ouvrier">Ouvrier</option>
            <option value="docteur">Docteur</option>
          </Select>
        </FormControl>

        <FormControl id="nationality" isRequired>
          <FormLabel>Pays de nationalité</FormLabel>
          <Input
            placeholder="Entrez le pays de nationalité"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={handleChange}
            value={formData.nationality}
          />
        </FormControl>

        <FormControl id="countryOfAddress" isRequired>
          <FormLabel>Pays d'adresse</FormLabel>
          <Select
            placeholder="Sélectionnez le pays d'adresse"
            _placeholder={{ color: 'gray.500' }}
            onChange={handleChange}
            value={formData.countryOfAddress}
          >
            <option value="ma">Maroc</option>
            <option value="qa">Qatar</option>
            <option value="usa">USA</option>
          </Select>
        </FormControl>
        </HStack>


      <HStack>
        <FormControl id="legalAddress" isRequired>
          <FormLabel>Adresse légale</FormLabel>
          <Input
            placeholder="Entrez l'adresse légale"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={handleChange}
            value={formData.legalAddress}
            
          />
        </FormControl>

        <FormControl id="city" isRequired>
          <FormLabel>Ville</FormLabel>
          <Select
            placeholder="Sélectionnez la ville"
            _placeholder={{ color: 'gray.500' }}
            onChange={handleChange}
            value={formData.city}
          >
            <option value="casablanca">Casablanca</option>
            <option value="marrakech">Marrakech</option>
            <option value="nouaceur">Nouaceur</option>
          </Select>
        </FormControl>
        </HStack>


        <HStack>
        <FormControl id="gsm" isRequired>
          <FormLabel>GSM</FormLabel>
          <Input
            placeholder="Entrez le numéro de GSM"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={handleChange}
            value={formData.gsm}
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Entrez l'adresse email"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            onChange={handleChange}
            value={formData.email}
          />
        </FormControl>
        </HStack>

        
        <Button className='Pop' colorScheme="teal" color={'white'} size="md" px={12} onClick={handleSaveModif}>
            Modifier
        </Button>
      </Stack>
    </>
  )
}

export default  AddToKYC