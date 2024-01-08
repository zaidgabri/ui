import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  useBreakpointValue,
  useColorModeValue,
  Container
} from '@chakra-ui/react';
import * as React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import MobileMenu from './MobileMenu';
import { Link, useLocation  } from 'react-router-dom';
import Logo from './gbArt.svg';
import LogoWhite from './BoaLogo.svg';
import { Link as LinkScroll } from 'react-scroll';
import { CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";







const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });



   const location = useLocation();
  const isContactPath = location.pathname === '/contact';


  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const bgColor = 'transparent';

  return (
    <Box
      as="nav"
      position="sticky"
      top="0"
      zIndex="100"
      bg={bgColor}

      backdropFilter={isScrolled ? 'blur(4px)' : 'none'}
      transition="all 0.3s ease"
      boxShadow={isScrolled ? 'sm' : 'none'}
    >
      <Container as="section" maxW="7xl" py={{ base: '3', lg: '4' }}>
        <Flex justify="space-between" align="center">
          
          <HStack spacing={4}>
            <Link to="/" aria-label="Home">
              <Image src={LogoWhite} alt="Logo" height="8" width="auto" />
            </Link>
          </HStack>
           {isDesktop ? (
            <HStack spacing={4}>
              {!isContactPath && (
                <>
                  {/* <LinkScroll to="NosMetiers" aria-label="NosMetiers" spy={true} smooth={true} offset={-70} duration={2000}>
                    <Button variant={'solid'} colorScheme={'green'}>
                      Stickers
                    </Button>
                  </LinkScroll>
                  <LinkScroll to="StatsOnBrand" aria-label="StatsOnBrand" spy={true} smooth={true} offset={-70} duration={2000}>
                    <Button variant={'solid'} bgColor={'#2563eb'} color={'#fff'} _hover={{ bg: '#1f51aa' }}>
                      Tags
                    </Button>
                  </LinkScroll> */}
                  <Link to={`/login`}>
                  <Button color={"white"} bgColor={'#AFB5BF'} _hover={{ bg: '#959AA0' }}>
                    login
                  </Button>
                  </Link>
                  <Link to={`/contact`}>
                  <Button color={"white"} bgColor={'#AFB5BF'} _hover={{ bg: '#959AA0' }}>
                    Contact Us
                  </Button>
                  </Link>
                
                </>
              )}
              {isContactPath && (
                <>
                <Link to={`/`}>
                    <Button >
                      <CloseIcon color="green" size={'24'}  />
                  </Button>
                </Link>
                </>
              )}
            </HStack>
          ) : (
            <IconButton
              variant="ghost"
              icon={isMenuOpen ? <FiX fontSize="1.25rem" /> : <FiMenu fontSize="1.25rem" />}
              aria-label="Toggle Menu"
              onClick={handleMenuToggle}
            />
          )}
        </Flex>
        {isMenuOpen && (
          <Box mt={4}>
            <MobileMenu />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;

