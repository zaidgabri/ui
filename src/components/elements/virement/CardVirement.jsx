import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  CloseButton,
  Divider,
  Flex,
  HStack,
  Icon,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { LuArrowLeftRight } from "react-icons/lu";
import RestituerBtn from './RestituerBtn';
import DetailsBtn from './DetailsBtn';

const CardVirement = ({data}) => (

  <Box as="section" bgColor={""} pt={{ base: '1', md: '2', }}  px={{ base: '4', md: '8', }}
  >
      <Flex direction={{ base: 'column', sm: 'row', }} w={"md"} boxShadow={useColorModeValue('md', 'md-dark')} bg="white" borderRadius="lg" overflow="hidden"
      >
        <Center display={{ base: 'none', sm: 'flex', }} bg="teal" px="5"
        >
          <Icon as={LuArrowLeftRight} boxSize="10" color="white" />
        </Center>
        <Stack direction="row" p="4" spacing="3" flex="1" >
          <Stack spacing="2.5" flex="1">
            <Stack spacing="1" bgColor={""}>
              <HStack justify="space-between">
                <Text fontSize="xl" fontWeight="bold">
                  Transfert
                </Text>
                <Text
                  fontSize="xl"
                  fontWeight="medium"
                  textDecoration={data.state === 'Bloqué' ? 'line-through' : 'none'}
                  color={data.state === 'Restitué' ? 'green.500' : 'inherit'} // You can choose a suitable color for Restitué
                >
                    {data.state === 'Restitué' ? '+' : (data.state === 'Servie' ? '-' : '')} {data.transferedAmount} MAD
                </Text>


              </HStack>
              <Text fontSize="sm" fontWeight="medium">
                {data.initatedDate}
              </Text>
              <HStack>
                <Text fontSize="sm" fontWeight="medium">Status - </Text>
                <Badge
                  size="sm"
                  colorScheme={
                    data.state === 'A servir' ? 'blue' :
                    data.state === 'Servie' ? 'teal' :
                    data.state === 'Extourné' ? 'gray' :
                    data.state === 'Restitué' ? 'green' :
                    data.state === 'Bloqué' ? 'red' :
                    data.state === 'Débloqué' ? 'orange' :
                    data.state === 'Déshérence' ? 'purple' : // Light purple for Déshérence
                    '' // Default or fallback colorScheme
                  }
                  fontWeight="medium"
                >
                  {data.state}
                </Badge>



              </HStack>

            </Stack>
            
            
          </Stack>
          
        </Stack>
        <Stack direction='row' h='100px' >
          <Divider orientation='vertical' />
        </Stack>
        <Stack justify="space-evenly" minW="24" divider={<StackDivider />} spacing="0">
            <DetailsBtn data={data} />
            <RestituerBtn data={data}/>
          </Stack>
      </Flex>
  </Box>
)

export default CardVirement