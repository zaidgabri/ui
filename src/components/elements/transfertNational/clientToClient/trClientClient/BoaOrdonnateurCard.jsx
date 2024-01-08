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
import { SlArrowDownCircle } from 'react-icons/sl'


const BoaOrdonnateurCard = ({ordonnateur}) => {

  
  return (
    <Box bg="white" width={'full'} borderRadius="2xl" boxShadow={mode('lg', 'lg-dark')} px={{ base: '6', md: '8', }} py="3" position="relative" overflow="hidden" borderTop="8px" borderColor="#056AA7"
    >
    
    <HStack justifyContent={"space-between"}>
      <Stack  textAlign="left">

        <Stack  align="left">
          <Stack spacing={0}>
            <Heading size={useBreakpointValue({ base: 'sm', md: 'sm', })} noOfLines={1}>
               {ordonnateur.lastName} {ordonnateur.firstName}
            </Heading>
            <Text fontSize="sm" fontWeight="semibold">
              Rib : {ordonnateur.rib} 
            </Text>
          </Stack>
        </Stack>

       
       <Stack  spacing={4}>
        <HStack  >
            <Circle size="6" bg={mode('blue.50', 'whiteAlpha.50')}>
              <Icon as={FiCheck} color="accent" />
            </Circle>
            <Text color="muted">Compte à débiter</Text>
          </HStack>
        
        
       </Stack>
      
      </Stack>

      <Icon as={SlArrowDownCircle} color={"teal.400"} boxSize={{ base: 4, md: 12 }}  />

    </HStack>
    </Box>
  )
}

export default BoaOrdonnateurCard