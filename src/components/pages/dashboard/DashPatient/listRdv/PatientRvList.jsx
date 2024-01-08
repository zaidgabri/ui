import React from 'react'
import RdvCard from './RdvCard'
import { Box, Button, HStack, Heading, SimpleGrid, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { FiDownloadCloud } from 'react-icons/fi'
import '../dashPatient.css'

const PatientRvList = () => {
  return (
    <Stack spacing={{ base: '8', lg: '6',}}>
          <Stack spacing="4" direction={{ base: 'column', lg: 'row',}}
            justify="space-between"
            align={{ base: 'start', lg: 'center',}}>
            <Stack spacing="1">
              <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm', })} fontWeight="medium" >
                Rendez-Vous
              </Heading>
              <Text color="muted">Voici la liste de vos rendez-vous planifiés :</Text>
            </Stack>
            <HStack spacing="3">
              <Button variant="secondary" leftIcon={<FiDownloadCloud fontSize="1.25rem" />}>
                Download
              </Button>
              <Button variant="primary">Create</Button>
            </HStack>
          </Stack>

          <Stack  spacing={{ base: '5', lg: '6', }} className='RdvListContenuScroll' style={{backgroundColor:'red.400',height:'80vh',display:'flex', justifyContent:'center',alignItems:'center'}}  >

            <Box style={{backgroundColor:'',height:'80vh'}} as="section" maxW={{ base: 'x', md: '6xl', }}  >
              <SimpleGrid  columns={{ base: 1, md: 3, }} spacing="6" >

              <RdvCard/>
              <RdvCard/>
              <RdvCard/>
              <RdvCard/>
              <RdvCard/>
              <RdvCard/>
              <RdvCard/>
              <RdvCard/>
              <RdvCard/>
              <RdvCard/>
              <RdvCard/>
              <RdvCard/>
              <RdvCard/>
              

            </SimpleGrid>
    
          </Box>
    
            

          </Stack>
         
    </Stack>
    
  
  )
}

export default PatientRvList