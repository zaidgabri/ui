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


const BoaOneDestCard = ({destination}) => {

  const destinations = destination[0];

  return (
    <Box bg="white" width={'285px'} borderRadius="2xl" boxShadow={mode('lg', 'lg-dark')} px={{ base: '6', md: '8', }} py="3" position="relative" overflow="hidden" borderTop="8px" borderColor="#056AA7"
    >
    
      <Stack  textAlign="left">

        <Stack  align="left">
          <Stack spacing={0}>
            <Heading size={useBreakpointValue({ base: 'sm', md: 'sm', })} noOfLines={1}>
              {destinations.name} 
            </Heading>
            <Text fontSize="sm" fontWeight="semibold">
              Rib : {destinations.rib} 
            </Text>
          </Stack>
        </Stack>

       
       <Stack  spacing={4}>
        <HStack  >
            <Circle size="6" bg={mode('blue.50', 'whiteAlpha.50')}>
              <Icon as={FiCheck} color="accent" />
            </Circle>
            <Text color="muted">Compte à créditer</Text>
          </HStack>
        
       </Stack>
        
        

      </Stack>
    </Box>
  )
}

export default BoaOneDestCard
