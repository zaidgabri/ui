// MobileMenu.js
import React from 'react';
import { ButtonGroup, Button, Box,useColorModeValue, useColorMode} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdCall, MdLockReset, MdTrackChanges } from 'react-icons/md';
import { VscFeedback } from 'react-icons/vsc';
import { BsBookmarkStar } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { GiElectric } from 'react-icons/gi';
import { RiAliensFill } from 'react-icons/ri';
import bgGreen from '../../assets/bgGreen.svg';

const MobileMenu = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box 
    bg={useColorModeValue('white', 'gray.800')}
    boxShadow={'lg'}
    p={2}
    // rounded={'xl'} 
    // borderRadius="2xl" 
    borderBottom="8px" 
    borderColor="#077854">

      {/* <Box className="d-flex">
        <Link to={`/trackYourOrder`}>
          <Button leftIcon={<BsBookmarkStar />}  variant="outline-primary">Why Choose Us?</Button>
        </Link>
      </Box> */}

      <Box className="d-flex">
        <Link to={`/`}>
          <Button leftIcon={<FaHome />} variant="outline-primary">Home</Button>
        </Link>
      </Box>
      

      <Box className="d-flex">
        <Link to={`/contact`}>
          <Button leftIcon={<MdCall />} variant="outline-primary">Contact Us</Button>
        </Link>
      </Box>

      <Box className="d-flex">
            <Button leftIcon={colorMode === "dark" ? (<GiElectric color="orange.200"  />) : (<RiAliensFill color="teal.700"  />)} variant="outline-primary" onClick={() => toggleColorMode()}>
              Switch Mode
            </Button>
      </Box>
      
      

      
    </Box>
  );
};

export default MobileMenu;
