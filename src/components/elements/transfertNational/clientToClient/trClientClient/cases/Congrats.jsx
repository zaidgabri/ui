import { Box, Button, Center, Heading, HStack, Icon, Square, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import { GoDesktopDownload } from 'react-icons/go';
import axios from 'axios'; // Import axios for making HTTP requests
import { baseURLtransfert } from '../../../../../../utils/useRequest';
import { CheckCircleIcon } from '@chakra-ui/icons';

const Congrats = () => {
  

  return (
    <>
      <Stack textAlign={'center'} bgColor={''}>


        <Center mx={32} mt={12} borderWidth="1px" borderRadius="lg" px="6" py="4" bg={useColorModeValue('white', 'gray.800')}>
            <Box textAlign="center" py={10} px={6}>
                <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
                <Heading as="h2" size="xl" mt={6} mb={2}>
                     Congratulations
                </Heading>
                <Text color={'gray.500'}>
                        Le transfert d'argent a été effectué avec succès.
                </Text>
            </Box>
        </Center>
      </Stack>
    </>
  );
};

export default Congrats;
