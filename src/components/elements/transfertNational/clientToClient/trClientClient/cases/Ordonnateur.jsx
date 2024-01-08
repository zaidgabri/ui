import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  FormControl,
  HStack,
  Icon,
  Input,
  InputGroup,
  Spinner,
  Stack,
  Text,
  Button,
  Square,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { IoMdArrowDropright } from 'react-icons/io';
import { baseURL } from '../../../../../../utils/useRequest';

const Ordonnateur = ({ onOrdonnateurButtonClick }) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [tel, setTel] = useState('');
  const [customerData, setCustomerData] = useState(null);

  // useEffect(() => {
  //   if (customerData !== null) {
  //     console.log("customerData", customerData);
  //     onOrdonnateurButtonClick(customerData);
  //   }
  // }, [customerData, onOrdonnateurButtonClick]);

  const handleButtonClick = async () => {
    setIsLoading(true);

    try {
      console.log('Sending POST request...');
      const response = await axios.post(
        `${baseURL}/client/check-customer-sirone-status`,
        { tel }
      );

      const { isBlockedOrExist, customer, message } = response.data;

      if (isBlockedOrExist) {
        setCustomerData(customer);
        toast({
          description: message,
          status: 'success',
          variant: 'top-accent',
          duration: 7000,
          isClosable: true,
          position: 'bottom',
        });
      } else {
        setCustomerData(null);
        toast({
          description: message,
          status: 'error',
          variant: 'top-accent',
          duration: 7000,
          isClosable: true,
          position: 'bottom',
        });
      }
    } catch (error) {
      console.error('Error fetching customer data:', error);
    } finally {
      setIsLoading(false);
      console.log('Request completed.');
    }
  };

  return (
    <Stack textAlign={'center'} bgColor={''}>
      <Text mb={2} fontSize="xl" fontWeight="bold" className="PopB" textAlign={'left'}>
        Saisir le numéro de téléphone
      </Text>

      <Stack mt={4}>
        <HStack justifyContent={'space-between'}>
          <FormControl isRequired>
            <InputGroup>
              <Input
                type="text"
                className="Pop"
                placeholder="+2126123456789"
                bgColor={'white'}
                focusBorderColor="whiteAlpha"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                disabled={isLoading}
              />
            </InputGroup>
          </FormControl>

          <Button
            className="Pop"
            colorScheme="blue"
            color={'white'}
            size="md"
            px={12}
            onClick={handleButtonClick}
            disabled={isLoading}
          >
            {isLoading ? <Spinner size="sm" /> : 'Rechercher'}
          </Button>
        </HStack>

        {customerData && (
          <HStack mt={5} p={2} justify="space-between" bgColor="gray.300" borderWidth="1px" borderRadius="lg">
            <HStack>
              <Square size="12" bg="bg-subtle" borderRadius="lg">
                <Icon as={HiOutlineUserCircle} boxSize="10" color="muted" />
              </Square>
              <Box textAlign="left" fontSize="sm">
                <Text className="PopM" color="empahsized" fontWeight="medium">
                  {customerData.firstName} {customerData.lastName}
                </Text>
                <Text className="Pop" color="muted">
                  Rib: {customerData.rib}
                </Text>
              </Box>
            </HStack>
            <VStack>
              <Icon as={IoMdArrowDropright} boxSize="10" color="muted" cursor="pointer" _hover={{ color: 'teal.600' }} onClick={() => onOrdonnateurButtonClick(customerData)} />
            </VStack>
          </HStack>
        )}
      </Stack>
    </Stack>
  );
};

export default Ordonnateur;
