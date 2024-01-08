import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode
} from '@chakra-ui/react'
import * as React from 'react'
import { FiDownloadCloud } from 'react-icons/fi'
import { Card } from './Card'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import './dashPatient.css'
import { Outlet, useNavigate } from 'react-router-dom'

const DashPatient = () => {

  const navigate=useNavigate();
  const goTo=(route)=>{
    return ()=>navigate(route)
     }

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    
    <Flex as="section" direction={{ base: 'column', lg: 'row', }} maxH="100vh" bg="bg-canvas"  >
      {isDesktop ? <Sidebar cb={goTo}/> : <Navbar cb={goTo}/>}
      
      <Container maxW="7xl" pt="8" flex="1" backgroundColor="#F6F4EE"  height="100vh" overflowY="auto">
        <Outlet></Outlet>
      </Container>

    </Flex>
  )
}

export default DashPatient;







// import {
//   Button,
//   Container,
//   Flex,
//   Heading,
//   HStack,
//   SimpleGrid,
//   Stack,
//   Text,
//   useBreakpointValue,
// } from '@chakra-ui/react'
// import * as React from 'react'
// import { FiDownloadCloud } from 'react-icons/fi'
// import { Card } from './Card'
// import { Navbar } from './Navbar'
// import { Sidebar } from './Sidebar'
// import DashPatientContenu from './DashPatientContenu'
// import './dashPatient.css'
// import { Outlet, useNavigate } from 'react-router-dom'

// const DashPatient = () => {

//   const navigate=useNavigate();
//   const goTo=(route)=>{
//     return ()=>navigate(route)
//      }

//   const isDesktop = useBreakpointValue({
//     base: false,
//     lg: true,
//   })
//   return (
//     <Flex as="section" direction={{ base: 'column', lg: 'row', }} height="100vh" bg="bg-canvas" overflowY="auto" >
//       {isDesktop ? <Sidebar cb={goTo}/> : <Navbar cb={goTo}/>}
      
//       <Container  maxW="7xl" py="8" flex="1" style={{backgroundColor:'',height:'100vh'}}>
//         <Stack spacing={{ base: '8', lg: '6',}}>
//           <Stack spacing="4" direction={{ base: 'column', lg: 'row',}}
//             justify="space-between"
//             align={{ base: 'start', lg: 'center',}}>
//             <Stack spacing="1">
//               <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm', })} fontWeight="medium" >
//                 Dashboard
//               </Heading>
//               <Text color="muted">All important metrics at a glance</Text>
//             </Stack>
//             <HStack spacing="3">
//               <Button variant="secondary" leftIcon={<FiDownloadCloud fontSize="1.25rem" />}>
//                 Download
//               </Button>
//               <Button variant="primary">Create</Button>
//             </HStack>
//           </Stack>

//           <Stack  spacing={{ base: '5', lg: '6', }} className='DashPatientContenuScroll' 
//           style={{backgroundColor:'',height:'80vh',display:'flex', justifyContent:'center',alignItems:'center'}}  >
            

//             <Outlet></Outlet>
//             {/* <DashPatientContenu  /> */}

//           </Stack>
         
//         </Stack>
//       </Container>
//     </Flex>
//   )
// }

// export default DashPatient;



