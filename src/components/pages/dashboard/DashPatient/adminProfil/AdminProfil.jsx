
import React, { useEffect, useState } from 'react';
import { Button, HStack, Heading, Stack, Box, useBreakpointValue , FormControl, FormLabel, Input,  Divider, Select,} from '@chakra-ui/react';
// import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom'



const AdminProfil = () => {

  // const dispatch = useDispatch();
  // const { isLoggedIn } = useSelector(state => state.auth);
  
  

  return (
    <Stack maxW={"6xl"} spacing={{ base: '8', lg: '6' }} mx={4}  >
      <Box
          bg="linear-gradient(to right, rgba(5, 106, 167, 0.7), rgba(0, 128, 128, 0.7))" // Teal gradient with transparency
          p="4"
          borderRadius="lg"
          backdropFilter="blur(8px)" // Adjust the blur value as needed
          boxShadow="lg">

          <Stack spacing="4" direction={{ base: 'column', lg: 'row' }} justify="space-between" align={{ base: 'start', lg: 'center' }}
          >
            <Stack spacing="1">
              <Heading
                size={useBreakpointValue({ base: 'xs', lg: 'md' })}
                fontWeight="medium"
                color={'white'}
              >
                Mon Compte
              </Heading>
            </Stack>
          </Stack>
        </Box>

      <Stack spacing={{ base: '5', lg: '6' }} mb={4} style={{ backgroundColor: 'red.400' }}>
        <Stack spacing={8} >
          <Stack align={'left'}>
            <Heading fontSize={'xl'} textAlign={'left'}>
              À propos de Issam BOURASS
            </Heading>
            <Divider />
          </Stack>

          <Stack maxW={'7xl'} spacing={8}>
            <Stack spacing={8} direction={{ base: 'column', sm: 'row' }}>
              <FormControl id="Prénom" isRequired>
                <FormLabel>Prénom</FormLabel>
                <Input name="prénom" type="text"   />
              </FormControl>

              <FormControl id="Nom" isRequired>
                <FormLabel>Nom</FormLabel>
                <Input name="lastName" type="text" />
              </FormControl>
            </Stack>

            <Stack spacing={8} direction={{ base: 'column', sm: 'row' }}>
              <FormControl id="Genre" isRequired>
                <FormLabel>Genre</FormLabel>
                <Select
                  name="genre"
                  placeholder="Sélectionner le genre"                  
                >
                
                  <option selected value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                  
                </Select>
              </FormControl>
{/* 
              <FormControl id="dateNaiss">
                <FormLabel>Date de naissance</FormLabel>
                <Input name="dateNaiss" type="date" value={formData.birthDate} onChange={(e)=>handleData({birthDate: e.target.value})} />
              </FormControl> */}
            </Stack>

            <Stack spacing={8} direction={{ base: 'column', sm: 'row' }}>
              <FormControl id="Tél" isRequired>
                <FormLabel>Téléphone mobile</FormLabel>
                <Input name="tél" type="text"/>
              </FormControl>

              <FormControl id="CIN">
                <FormLabel>CIN</FormLabel>
                <Input name="cin" type="text"  />
              </FormControl>
            </Stack>

            <Stack spacing={8} direction={{ base: 'column', sm: 'row' }}>
              <FormControl id="Ville" isRequired>
                <FormLabel>Ville</FormLabel>
                <Select name="city" placeholder="ville" >
                 
                </Select>
              </FormControl>

              <FormControl id="CodePostal">
                <FormLabel>Code postal</FormLabel>
                <Input name="postCode" type="number"  />
              </FormControl>
            </Stack>

            <Stack spacing={8} direction={{ base: 'column', sm: 'row' }}>
              <FormControl id="Adresse" isRequired>
                <FormLabel>Adresse</FormLabel>
                <Input name="address" type="text"  />
              </FormControl>

              <FormControl id="Email">
                <FormLabel>Email</FormLabel>
                <Input name="email" type="email"  />
              </FormControl>
            </Stack>
          </Stack>

          <Stack spacing={10} pt={2}>
          <Link to={`/dash`} size="lg">
            <Button loadingText="Submitting" size="lg" bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}>
              Sauvegarder
            </Button>
          </Link>
          </Stack>
         

       
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AdminProfil;


