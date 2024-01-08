

import React, { useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  Text,
  InputGroup,
  Input,
  Stack,
  HStack,
  Progress,
  Button,
  Flex,
  Icon,
  motion,
  Image
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import {
  FaMale,
  FaBirthdayCake,
  FaWeight,
  FaArrowsAlt,
  FaRunning,
  FaBullseye,
} from 'react-icons/fa';
import { IoCalendarOutline } from "react-icons/io5";
import { GiWeightScale, GiBodyHeight, GiStairsGoal  } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { TbListDetails } from "react-icons/tb";
import { HiDocumentArrowDown } from "react-icons/hi2";



import { FaMoneyBillTransfer} from "react-icons/fa6";


import TypeTransfert from './cases/TypeTransfert';
import Ordonnateur from './cases/Ordonnateur';
import Dest from './cases/Dest';
import Recu from './cases/Recu';
import Summary from './cases/Summary';

import sender from './assets/sender.svg'
import dest from './assets/dest.svg'
import Congrats from './cases/Congrats';
import { Link } from 'react-router-dom';

const TrClientBank = () => {

  const toast = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;


  const [typeSelected, setTypeSelected] = useState(false); // State to track if the user selected sex
  const [ordonnateurSelected, setOrdonnateurSelected] = useState(false); 
  const [destSelected, setDestSelected] = useState(false); 
  const [summarySelected, setSummarySelected] = useState(false); 
  const [recuSelected, setRecuSelected] = useState(false); 
  const [goalSelected, setGoalSelected] = useState(false);
  const [objetTransfer, setObjetTransfer] = useState({});
  const [destinations, setdestinations] = useState({});
  const [transferID, setTransferID] = useState();
  const [transferRef, setTransferRef] = useState();

  const [destinationsBackClicked, setDestinationsBackClicked] = useState(false);


  
  
  const [ordonnateur, setOrdonnateur] = useState({});


  const handleButtonClick = (step) => {
    setCurrentStep(step);
  
    // Reset states for subsequent steps when going back
    if (step < currentStep) {
      switch (step) {
        case 0:
          setTypeSelected(false);
          setOrdonnateurSelected(false);
          setDestSelected(false);
          setSummarySelected(false);
          setRecuSelected(false);
          setGoalSelected(false);
          break;
        case 1:
          setOrdonnateurSelected(false);
          setDestSelected(false);
          setSummarySelected(false);
          setRecuSelected(false);
          setGoalSelected(false);
          break;
        case 2:
          setDestSelected(false);
          setSummarySelected(false);
          setRecuSelected(false);
          setGoalSelected(false);
          setDestinationsBackClicked(true);
          break;
        case 3:
          setSummarySelected(false);
          setRecuSelected(false);
          setGoalSelected(false);
          break;
        case 4:
          setRecuSelected(false);
          setGoalSelected(false);
          break;
        case 5:
          setGoalSelected(false);
          break;
        default:
          break;
      }
    }
  };
  



  const handleTypeButtonClick = (type) => {
    setTypeSelected(true);
    handleButtonClick(1);
  };

   const handleOrdonnateurButtonClick = (infos) => {
    setOrdonnateurSelected(true);
    handleButtonClick(2);
    setOrdonnateur(infos);
    console.log("idOrdonnateur :",ordonnateur.id);
  };

  const handleDestButtonClick = (object, dests) => {
    setDestSelected(true);
    handleButtonClick(3);
    setObjetTransfer(object);
    setdestinations(dests);

  };

  const handleSummaryButtonClick = (infos, ref) => {
    setSummarySelected(true);
    handleButtonClick(4);
    setTransferID(infos);
    setTransferRef(ref);
  };

  const handleRecuButtonClick = (infos) => {
    setRecuSelected(true);
    handleButtonClick(5);
  };

 

  
  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <TypeTransfert onTypeButtonClick={handleTypeButtonClick} />
        );
      case 1:
        return (
          <Ordonnateur onOrdonnateurButtonClick={handleOrdonnateurButtonClick}/>
        );
      case 2:
        return (
          <Dest onDestButtonClick={handleDestButtonClick} idOrdonnateur={ordonnateur.id} destinationsBackClicked={destinationsBackClicked} destinationsBack={destinations} />
        );
      case 3:
        return (
          <Summary objetTransfer={objetTransfer} destinations={destinations} ordonnateur={ordonnateur} onSummaryButtonClick={handleSummaryButtonClick}/>
        );
      case 4:
        return (
          <Recu onRecuButtonClick={handleRecuButtonClick} transferID={transferID} transferRef={transferRef}/>
        );
      default:
        return <Congrats/>;
    }
  };

  return (
    <>
      <Box  display="flex" flexDirection="column">
        <Container
          flex="1"
          maxW="5xl"
          // mt={{ base: '8', md: '2' }}
          style={{ position: 'relative' }}
        >
          <Box
            mt={'30px'}
            px={'10px'}
            py={'20px'}
            bgColor={'white'}
            zIndex={1}
            position="relative"
            overflow="hidden"
            borderRadius="2xl"
            borderTop="8px"
            borderColor="black.400"
          >
            <Stack>
              <Stack>
                <Flex justifyContent="space-between">
                  <Text fontSize={{ base: 'md', sm: 'md' }} className="PopB">
                    Transfert national
                  </Text>
                  <Text fontSize={{ base: 'md', sm: 'md' }} className="PopB">
                    {currentStep === 0 ? '0%' : `${Math.floor(((currentStep + 1) / totalSteps) * 100)}%`}

                  </Text>
                </Flex>
                <Progress
                  rounded="full"
                  hasStripe
                  value={currentStep === 0 ? 0 : ((currentStep + 1) / totalSteps) * 100}
                  colorScheme="blue"
                  isAnimated
                  sx={{
                    "& > div:first-child": {
                      transitionProperty: "width",
                    },
                  }}
                />
              </Stack>
              <Stack mt={4}>
                <Flex justifyContent={'space-between'}>
                <Link to="/dash/transfert-national" aria-label="Home">
                    <Button
                      className="Pop"
                      colorScheme="teal"
                      color={'white'}
                      size={{ base: 'sm', md: 'lg' }}
                      px={{ base: 6, md: 16 }}
                      py={{ base: 6, md: 12 }}
                      textAlign="center"
                      onClick={() => handleButtonClick(0)}
                      isDisabled={currentStep >= 4}
                    >
                      <Flex direction="column" alignItems="center">
                        <Text fontSize={{ base: 'xs', md: 'lg' }}>Type</Text>
                        <Icon as={FaMoneyBillTransfer} boxSize={{ base: 4, md: 10 }} mt={{ base: 1, md: 2 }} />
                      </Flex>
                    </Button>
                </Link>

                <Button
                  className="Pop"
                  colorScheme="teal"
                  color={'white'}
                  size={{ base: 'sm', md: 'lg' }}
                  px={{ base: 6, md: 9 }}
                  py={{ base: 6, md: 12 }}
                  textAlign="center"
                  onClick={() => handleButtonClick(1)}
                  isDisabled={currentStep >= 4}
                >
                  <Flex direction="column" alignItems="center">
                    <Text fontSize={{ base: 'xs', md: 'lg' }}>Ordonnateur</Text>
                    <Image src={sender} alt="Sender Icon" boxSize={{ base: 4, md: 10 }} mt={{ base: 1, md: 2 }} />
                  </Flex>
                </Button>

                <Button
                  className="Pop"
                  colorScheme="teal"
                  color={'white'}
                  size={{ base: 'sm', md: 'lg' }}
                  px={{ base: 6, md: 9 }}
                  py={{ base: 6, md: 12 }}
                  textAlign="center"
                  onClick={() => handleButtonClick(2)}
                  isDisabled={currentStep >= 4 || !ordonnateurSelected}
                >
                  <Flex direction="column" alignItems="center">
                    <Text fontSize={{ base: 'xs', md: 'lg' }}>Bénéficiaire(s)</Text>
                    <Icon as={GoGoal} boxSize={{ base: 4, md: 10 }} mt={{ base: 1, md: 2 }} />
                  </Flex>
                </Button>

                <Button
                  className="Pop"
                  colorScheme="teal"
                  color={'white'}
                  size={{ base: 'sm', md: 'lg' }}
                  px={{ base: 6, md: 9 }}
                  py={{ base: 6, md: 12 }}
                  textAlign="center"
                  onClick={() => handleButtonClick(3)}
                  isDisabled={currentStep >= 4 || !destSelected}
                >
                  <Flex direction="column" alignItems="center">
                    <Text fontSize={{ base: 'xs', md: 'lg' }}>Récapitulative</Text>
                    <Icon as={TbListDetails} boxSize={{ base: 4, md: 10 }} mt={{ base: 1, md: 2 }} />
                  </Flex>
                </Button>

                <Button
                  className="Pop"
                  colorScheme="teal"
                  color={'white'}
                  size={{ base: 'sm', md: 'lg' }}
                  px={{ base: 6, md: 16 }}
                  py={{ base: 6, md: 12 }}
                  textAlign="center"
                  onClick={() => handleButtonClick(4)}
                  isDisabled={!summarySelected}
                >
                  <Flex direction="column" alignItems="center">
                    <Text fontSize={{ base: 'xs', md: 'lg' }}>Reçu</Text>
                    <Icon as={HiDocumentArrowDown} boxSize={{ base: 4, md: 10 }} mt={{ base: 1, md: 2 }} />
                  </Flex>
                </Button>


                </Flex>
              </Stack>
            </Stack>
          </Box>
          <Box
            // height={"365px"}
            px={'20px'}
            py={'35px'}
            transform={{ base: 'translateY(-25px)', md: 'translateY(-25px)' }}
            bgColor={'facebook.50'}
            borderRadius="2xl"
          >
            {renderForm()}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TrClientBank;



