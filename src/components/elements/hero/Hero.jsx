import { Box, Button, Flex, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { HiChevronRight } from 'react-icons/hi'
import img from '../../../assets/img/imgHero.webp';
import { Link} from 'react-scroll'

const Hero = () => {



  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative">
      <Box py="32" position="relative" zIndex={1} >
        <Box align={'center'}
          maxW={{
            base: 'xl',
            md: '7xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
          color="white"
        >
          <Box maxW="xl"  align={'center'}>
            <Heading as="h1" size="3xl" fontWeight="extrabold">
             The world’s first string art
            </Heading>
            <Text
              fontSize={{
                md: '2xl',
              }}
              mt="4"
              maxW="lg"
            >
              that you will assemble with your own hands from any of your photos.
            </Text>
            <Stack 
              
              mt="10"
              spacing="4"
            >
              <Link to="productWithCarousel" aria-label="Buy Now" spy={true} smooth={true} offset={-70} duration={2000}>
              <Box bgColor="teal.500"
                  _hover={{
                    backgroundColor: 'teal.600',
                  }}
                  _active={{
                    backgroundColor: 'teal.700',
                  }}
                  px="8"
                  rounded="full"
                  size="lg"
                  >
                <Text
                alignContent={"center"}
                  height={"48px"}
                  //  bgColor={"red"}
                  p="3"
                  
                  size="lg"
                  fontSize="md"
                  fontWeight="bold"
                >
                  Buy Now
                </Text>
              </Box>
            </Link>
              <HStack
                as="a"
                cursor="auto" 
                justify={{
                  base: 'center',
                  md: 'center',
                }}
                color="white"
                rounded="full"
                fontWeight="bold"
                px="6"
                py="3"
                bg='whiteAlpha.300'
                aria-label="Unbeatable Value" 
                // _hover={{
                //   bg: 'whiteAlpha.300',
                // }}
              >
                <span >Unbeatable Value: Unlock it for Only 5 Dollars!</span>
                <HiChevronRight />
              </HStack>
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
      >
        <Box position="relative" w="full" h="full">
          <Img
            src={img}
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex>
    </Box>
  )
}


export default Hero




// import { Box, Button, Flex, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
// import * as React from 'react'
// import { HiChevronRight } from 'react-icons/hi'
// import img from '../../../assets/img/imgHero.jpg';

// const Hero = () => {
//   return (
//     <Box bg="gray.800" as="section" minH="140px" position="relative">
//       <Box py="32" position="relative" zIndex={1}>
//         <Box
//           maxW={{
//             base: 'xl',
//             md: '7xl',
//           }}
//           mx="auto"
//           px={{
//             base: '6',
//             md: '8',
//           }}
//           color="white"
//         >
//           <Box maxW="xl">
//             <Heading as="h1" size="3xl" fontWeight="extrabold">
//             The world’s first string art
//             </Heading>
//             <Text
//               fontSize={{
//                 md: '2xl',
//               }}
//               mt="4"
//               maxW="lg"
//             >
//               that you will assemble with your own hands from any of your photos.
//             </Text>
//             <Stack
//               direction={{
//                 base: 'column',
//                 md: 'row',
//               }}
//               mt="10"
//               spacing="4"
//             >
//               <Button
//                 as="a"
//                 href="#"
//                 colorScheme="teal"
//                 px="8"
//                 rounded="full"
//                 size="lg"
//                 fontSize="md"
//                 fontWeight="bold"
//               >
//                 Buy Now
//               </Button>
//               <HStack
//                 as="a"
//                 cursor="auto" 
//                 justify={{
//                   base: 'center',
//                   md: 'flex-start',
//                 }}
//                 color="white"
//                 rounded="full"
//                 fontWeight="bold"
//                 px="6"
//                 py="3"
//                 bg='whiteAlpha.300'
//                 // _hover={{
//                 //   bg: 'whiteAlpha.300',
//                 // }}
//               >
//                 <span >Only 5$</span>
//                 <HiChevronRight />
//               </HStack>
//             </Stack>
//           </Box>
//         </Box>
//       </Box>
//       <Flex
//         id="image-wrapper"
//         position="absolute"
//         insetX="0"
//         insetY="0"
//         w="full"
//         h="full"
//         overflow="hidden"
//         align="center"
//       >
//         <Box position="relative" w="full" h="full">
//           <Img
//             src={img}
//             // src="https://images.unsplash.com/photo-1545569310-f6d4b4d7ede9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//             alt="Main Image"
//             w="full"
//             h="full"
//             objectFit="cover"
//             objectPosition="top bottom"
//             position="absolute"
//           />
//           <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
//         </Box>
//       </Flex>
//     </Box>
//   )
// }


// export default Hero

