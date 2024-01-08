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


const BoaCard = ({ordonnateur}) => {


  
  
  return (
    <Box bg="white" width={'320px'} borderRadius="2xl" boxShadow={mode('lg', 'lg-dark')} px={{ base: '6', md: '8', }} py="3" position="relative" overflow="hidden" borderTop="8px" borderColor="#056AA7"
    >
    
      <Stack  textAlign="left">

        <Stack  align="left">
          <Stack spacing={0}>
            <Heading size={useBreakpointValue({ base: 'sm', md: 'sm', })} noOfLines={1}>
               {ordonnateur.lastName} {ordonnateur.firstName}
            </Heading>
            <Text fontSize="sm" fontWeight="semibold">
                Rib: {ordonnateur.rib}  
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
        
          {/* <HStack justifyContent={'space-between'}>
            <Button variant={'solid'} colorScheme='teal'  size="sm" >Modifier</Button>
            <Button variant={'solid'}  size="sm" >Modifier</Button>
          </HStack> */}
       </Stack>
        
        

      </Stack>
    </Box>
  )
}

export default BoaCard