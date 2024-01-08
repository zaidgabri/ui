import {
  Box,
  Button,
  Circle,
  Heading,
  HStack,
  Icon,
  List,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import React from 'react'
import { FiCheck } from 'react-icons/fi'
import InfoRdvModal from './InfoRdvModal'


const RdvCard = () => {

  
  return (
    <Box bg="bg-surface" width={'320px'} borderRadius="2xl" boxShadow={mode('lg', 'lg-dark')} px={{ base: '6', md: '8', }} py="3" position="relative" overflow="hidden" borderTop="8px" borderColor="teal.400"
    >
    
      <Stack  textAlign="left">

        <Stack  align="left">
          <Stack spacing={0}>
            <Heading size={useBreakpointValue({ base: 'sm', md: 'sm', })} noOfLines={1}>
               Dr. Yanis KARIM 11/05/2023 à 11:30
            </Heading>
            <Text fontSize="sm" fontWeight="semibold">
                  Chirurgien dentiste
              </Text>
          </Stack>
        </Stack>

       
       <Stack  spacing={4}>
        <HStack  >
            <Circle size="6" bg={mode('blue.50', 'whiteAlpha.50')}>
              <Icon as={FiCheck} color="accent" />
            </Circle>
            <Text color="muted">Détartrage</Text>
          </HStack>
        
          <HStack justifyContent={'space-between'}>
            <InfoRdvModal/>
            <Button variant={'solid'}  size="sm" >Ordonnance</Button>
          </HStack>
       </Stack>
        
        

      </Stack>
    </Box>
  )
}

export default RdvCard