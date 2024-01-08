import { Box, Button, Flex, Heading, HStack, Img, Stack, Text, createIcon, useColorMode, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import img from './heroBOA.png'
import imgDark from './heroBOAdark.png'
import imgMobile from './bgHerroMobile.svg'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link as LinkScroll } from 'react-scroll';





const Hero = () => {

  const { colorMode } = useColorMode();

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });


  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };


  return (
    <Box   as="section" minH="140px" position="relative" backgroundColor={"f00"} mx={12} mt={5} border="20px"  borderColor="blue.500" >
      <Box  py="40" position="relative" zIndex={2} >
        <Box
          maxW={{
            base: 'xl',
            md: '7xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
           
        >
          <Box maxW="xl">
            <Heading 
               
                as="h1" 
                size={{base: "xl", md: '3xl',}} fontWeight="extrabold">
              Bank Of Africa
            </Heading>
            <Text
              fontSize={{
                md: 'xl',
              }}
              mt="4"
              maxW="lg"
            >
              votre partenaire financier de confiance dans l'ère numérique. Nous nous engageons à fournir une expérience bancaire d'excellence et innovante, conçue pour répondre spécifiquement à vos besoins. 
            </Text>
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              mt="10"
              spacing="4"
            >
            <LinkScroll to="ListStickers" aria-label="ListStickers" spy={true} smooth={true} offset={-70} duration={2000}>
               
              <Button
                rightIcon={<ChevronRightIcon />}
                as="a"
                w={"full"}
                colorScheme='blue' 
                px="8"
                rounded="full"
                size="lg"
                fontSize="md"
                fontWeight="bold"

              >
                À propos de nous
              </Button>
            </LinkScroll>
            
   
              
            </Stack>
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
        zIndex={1}
      >
        <Box position="relative" w="full" h="full">
          <Img
            src={colorMode === 'dark' ? imgDark : (isDesktop ? img : imgMobile)}
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
            rounded={25}
            
          />
          <Box position="absolute" w="full" h="full"  />
        </Box>
      </Flex>

   

    </Box>
    
  )
}

export default Hero








// import { Box, Button, Flex, Img, useColorMode } from '@chakra-ui/react';
// import * as React from 'react';
// import img from './bgHerro.png';
// // import img from './imgHeader.jpg';
// import { ArrowForwardIcon } from '@chakra-ui/icons';

// const Hero = () => {
//   const { colorMode } = useColorMode();

//   return (
//     <Box  as="section" minH="100vh" position="relative">
//       <Flex id="image-wrapper" position="absolute" insetX="0" insetY="0" w="full" h="100vh" overflow="hidden" align="center">
//         <Box position="relative" w="full" h="full">
//           <Img src={img} alt="Main Image" w="full" h="100vh" objectFit="cover" objectPosition="top bottom" position="absolute" />
//           <Box position="absolute" w="full" h="full" bg="blackAlpha.200" />
//         </Box>
//       </Flex>

//     <Box maxW={'xl'}>
//       <Button
//         rounded={'full'}
//         size={'lg'}
//         fontSize="lg"
//         fontWeight="bold"
        
//         colorScheme='blackAlpha'
        
//         px={{md: '32', base: '10'}}
//         rightIcon={<ArrowForwardIcon h={6} w={6} color={'gray.300'} />}
//         position="absolute"
//         bottom="12"
//         left="50%"
//         transform="translateX(-50%)"
//       >
//         Green Boys Stickers
//       </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Hero;
