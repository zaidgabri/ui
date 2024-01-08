import React from 'react'
import patientDefaultImg from "../../../../../assets/bgGreen.svg";
import { Box, Button, HStack, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { FiDownloadCloud } from 'react-icons/fi';

const DashDefault = () => {
  return (
    <Stack spacing={{ base: '8', lg: '6',}} >       
    <Box
      bg="linear-gradient(to right, rgba(5, 106, 167, 0.7), rgba(0, 128, 128, 0.7))" // Teal gradient with transparency
      p="4"
      borderRadius="lg"
      backdropFilter="blur(8px)" // Adjust the blur value as needed
      boxShadow="lg"
      mx={4}>

      <Stack spacing="4" direction={{ base: 'column', lg: 'row' }} justify="space-between" align={{ base: 'start', lg: 'center' }}
      >
        <Stack spacing="1">
          <Heading
            size={useBreakpointValue({ base: 'xs', lg: 'md' })}
            fontWeight="medium"
            color="white"
          >
            Dashboard
          </Heading>
        </Stack>
      </Stack>
    </Box>

          <Stack  spacing={{ base: '5', lg: '6', }} className='RdvListContenuScroll' style={{backgroundColor:'red.400',height:'80vh',display:'flex', justifyContent:'center',alignItems:'center'}}  >

            {/* <Stack  textAlign={'center'}>
                <Image  src={patientDefaultImg} height="300px"  alt="patientDefaultImg" />
            </Stack> */}
  
            

          </Stack>
         
    </Stack>
  )
    
}

export default DashDefault