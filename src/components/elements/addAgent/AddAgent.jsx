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
} from '@chakra-ui/react'
import { useState } from 'react';
import { GiRegeneration } from "react-icons/gi";

import { MdAdd } from "react-icons/md";
import ListAgent from './listAgent/ListAgent'
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

const AddAgent = () => {

    const [rotationSpeed, setRotationSpeed] = useState(1); // Initial rotation speed

    const [formattedDate, setFormattedDate] = useState('');

    const handleDateChange = (event) => {
        let inputDate = event.target.value;
        inputDate = inputDate.replace(/\D/g, ''); // Remove non-numeric characters

        let formattedValue = '';

        if (inputDate.length >= 2) {
        formattedValue += `${inputDate.slice(0, 2)}/`;
        inputDate = inputDate.slice(2);
        }

        if (inputDate.length >= 2) {
        formattedValue += `${inputDate.slice(0, 2)}/`;
        inputDate = inputDate.slice(2);
        }

        formattedValue += inputDate;

        setFormattedDate(formattedValue);
    };    

  const handleIconClick = () => {
    // Increase the rotation speed on click
    setRotationSpeed(rotationSpeed + 1);
  };



  return (
    <>

      <Stack maxW={'7xl'} mx={4} mb={8} mt={2} alignItems={"flex-start"}>
            
            <Link to="/dash/liste-agent" aria-label="Home">
                <IconButton aria-label="Go back" icon={<ArrowBackIcon boxSize="8"  />} borderRadius="full" boxSize="12" variant={'solid'} />
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
                Ajouter Un agent
            </Heading>
            </Stack>
            <IconButton  icon={<MdAdd fontSize="1.50rem" />} variant={"solid"} aria-label="Générer"/>

        </Stack>
        </Box>
 
        <HStack>

            <FormControl id="nomComplet" isRequired>
            <FormLabel>Le Nom Complet</FormLabel>
            <Input
                placeholder="Issam BOURASS"
                _placeholder={{ color: 'gray.500' }}
                type="text"
            />
            </FormControl>

            <FormControl id="cin" isRequired>
            <FormLabel>CIN</FormLabel>
            <Input
                placeholder="BK123456"
                _placeholder={{ color: 'gray.500' }}
                type="text"
            />
        </FormControl>

        </HStack>

        <HStack>

            <FormControl id="numTel" isRequired>
            <FormLabel>Télephone</FormLabel>
            <Input
                placeholder="0771407988"
                _placeholder={{ color: 'gray.500' }}
                type="text"
            />
            </FormControl>
            <FormControl id="dateNaiss" isRequired>
            <FormLabel>Date De Naissance</FormLabel>
            <Input
                placeholder="JJ/MM/AAAA"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={formattedDate}
                onChange={handleDateChange}
            />
            </FormControl>

        </HStack>
        
        <HStack>

        <FormControl id="agence" isRequired>
            <FormLabel>Agence</FormLabel>
            <Input
                placeholder="Guiliz"
                _placeholder={{ color: 'gray.500' }}
                type="text"
            />
            </FormControl>

            <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
                placeholder="email@boa.com"
                _placeholder={{ color: 'gray.500' }}
                type="email"
            />
            </FormControl>

           
        </HStack>
        <HStack>
            <FormControl id="password" isRequired>
            <FormLabel>Mot de Passe</FormLabel>
            <Input
                placeholder="Cliquez sur l'icone pour générer un mot de passe."
                _placeholder={{ color: 'gray.500' }}
                type="text"
            />
            </FormControl>

            
            
            {/* <IconButton mt={8} icon={<GiRegeneration fontSize="1.25rem" />} colorScheme='teal' aria-label="Générer"/> */}

            <IconButton mt={8} colorScheme="teal" aria-label="Générer" onClick={handleIconClick} _hover={{ cursor: "pointer" }}>
            <Box as={GiRegeneration} fontSize="1.25rem" style={{ transition: "transform 0.3s ease-in-out", transform: `rotate(${rotationSpeed * 360}deg)` }} />
            </IconButton>

            
        </HStack>
            
        {/* <Stack spacing={6} direction={['column', 'row']}>
          
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}>
            Ajouter
          </Button>

          <Button
            variant={"solid"}
            w="full"
            >
            Annuler
          </Button>
        </Stack> */}
      </Stack>
      {/* <ListAgent /> */}
    </>
  )
}

export default  AddAgent