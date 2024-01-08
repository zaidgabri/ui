// Sidebar.js

import React, { useState } from 'react';
import { Flex, Stack, Divider } from '@chakra-ui/react';
import { FiHome,FiLogOut } from 'react-icons/fi';
import { FaAddressCard } from 'react-icons/fa'
import { FaMoneyBillTransfer} from "react-icons/fa6";
import { SiMoneygram } from "react-icons/si";
import { BsPeople,BsPersonSlash } from "react-icons/bs";
import { Logo } from './Logo';
import { NavButton } from './NavButton';
import { UserProfile } from './UserProfile';
import { BiMoneyWithdraw } from "react-icons/bi";
import { TiArrowMaximise } from "react-icons/ti";






export const Sidebar = ({ cb }) => {
  const [selectedRoute, setSelectedRoute] = useState('');

  const handleButtonClick = (route) => {
    setSelectedRoute(route);
    cb(route)();
  };

  return (
    <Flex bg="#004C7A" color="white" height="100vh" maxW={{ base: 'full', sm: 'xs' }} py={{ base: '6', sm: '4' }} px={{ base: '6', sm: '5' }}>
      <Stack justify="space-between" spacing="1">
        <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
          <Logo fill="#ffffff" />
          <Stack spacing="1">
            <NavButton variantColor="teal"
              isSelected={selectedRoute === ''}
              onClick={() => handleButtonClick('')}
              label="Tableau de bord"
              icon={FiHome}
            />
            <NavButton variantColor="teal"
              isSelected={selectedRoute === 'transfert-national'}
              onClick={() => handleButtonClick('transfert-national')}
              label="Transfert National"
              icon={FaMoneyBillTransfer}
            />
            <NavButton variantColor="teal"
              isSelected={selectedRoute === 'virement'}
              onClick={() => handleButtonClick('virement')}
              label="Restitution"
              icon={SiMoneygram}
            />
            <NavButton variantColor="teal"
              isSelected={selectedRoute === 'liste-agent'}
              onClick={() => handleButtonClick('liste-agent')}
              label="Liste Agent"
              icon={BsPeople}
            />
            <NavButton variantColor="teal"
              isSelected={selectedRoute === 'liste-prospects'}
              onClick={() => handleButtonClick('liste-prospects')}
              label="KYC"
              icon={BsPeople}
            />
            <NavButton variantColor="teal"
              isSelected={selectedRoute === 'liste-noir'}
              onClick={() => handleButtonClick('liste-noir')}
              label="Liste Noir"
              icon={BsPersonSlash}
            />
            <NavButton variantColor="teal"
            isSelected={selectedRoute === 'retrait-argent'}
            onClick={() => handleButtonClick('retrait-argent')}
            label="Retrait d'argent"
            icon={BiMoneyWithdraw}
          />
          <NavButton variantColor="teal"
            isSelected={selectedRoute === 'plafond'}
            onClick={() => handleButtonClick('plafond')}
            label="Paramétrage plafonds"
            icon={TiArrowMaximise}
          />

            
          </Stack>
        </Stack>
        <Stack spacing={{ base: '5', sm: '6' }}>
          <Stack spacing="1">
            <NavButton variantColor="teal" isSelected={selectedRoute === 'profil'} onClick={() => handleButtonClick('profil')} label="Mon compte" icon={FaAddressCard} />
            <NavButton
              variantColor="red"
              isSelected={selectedRoute === 'deconnexion'}
              onClick={() => handleButtonClick('deconnexion')}
              label="Se Déconnecter"
              icon={FiLogOut}
            />

          </Stack>
          <Divider borderColor="bg-accent-subtle" />
          <UserProfile
            name={'Issam BOURASS'}
            image="https://media.licdn.com/dms/image/D4E35AQGgSu1VARo5vg/profile-framedphoto-shrink_200_200/0/1700277971867?e=1703134800&v=beta&t=L6uOOys62nz4-y8KnJxhadJv8BORxF43lwkpaqPRV0Q"
            email={'issam.brs@gmail.com'}
          />
        </Stack>
      </Stack>
    </Flex>
  );
};


// import { Icon } from '@chakra-ui/icons'
// import {
//   Box,
//   Button,
//   Divider,
//   Flex,
//   HStack,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Progress,
//   Stack,
//   Text,
// } from '@chakra-ui/react'
// import {
//   FiBarChart2,
//   FiBookmark,
//   FiCheckSquare,
//   FiClock,
//   FiHelpCircle,
//   FiHome,
//   FiLogOut,
//   FiSearch,
//   FiSettings,
//   FiUsers,
// } from 'react-icons/fi'
// import { Logo } from './Logo'
// // import LogoWhite from './BoaLogo.svg';

// import { NavButton } from './NavButton'
// import { UserProfile } from './UserProfile'
// import { FaAddressCard } from 'react-icons/fa'
// import { FaMoneyBillTransfer} from "react-icons/fa6";
// import { GiTakeMyMoney } from "react-icons/gi";
// import { SiMoneygram } from "react-icons/si";
// import { ImBlocked } from "react-icons/im";
// import { BsPersonAdd } from "react-icons/bs";







// import React, { useState } from 'react';



// export const Sidebar = ({cb}) => { 

//   return( 
//   <Flex  bg="#004C7A" color="white" height={'100vh'} maxW={{ base: 'full', sm: 'xs', }} py={{ base: '6', sm: '4', }} px={{ base: '6', sm: '5', }}
//   >
//     <Stack justify="space-between" spacing="1" >
//       <Stack spacing={{ base: '5', sm: '6', }}
//         shouldWrapChildren
//       >
        
//         <Logo fill="#ffffff"/>
        
//         <Stack spacing="1">
//         <NavButton bg="#056AA7" _hover={{ bg: "teal.500" }} _selected={{ bg: "teal.600" }} _active={{ bg: "teal.700" }} onClick={cb("")} label="Tableau de bord" icon={FiHome} />
//           <NavButton bg="#056AA7" _hover={{ bg: "teal.500" }} _selected={{ bg: "teal.600" }} _active={{ bg: "teal.700" }} onClick={cb("transfert-national")} label="Transfert National" icon={FaMoneyBillTransfer} />
//           <NavButton bg="#056AA7" _hover={{ bg: "teal.500" }} _selected={{ bg: "teal.600" }} _active={{ bg: "teal.700" }} onClick={cb("rendez-vous")} label="La Restitution" icon={SiMoneygram} aria-current="page" />
//           <NavButton bg="#056AA7" _hover={{ bg: "teal.500" }} _selected={{ bg: "teal.600" }} _active={{ bg: "teal.700" }} onClick={cb("liste-noir")} label="La Liste Noir" icon={ImBlocked} aria-current="page" />
//           <NavButton bg="#056AA7" _hover={{ bg: "teal.500" }} _selected={{ bg: "teal.600" }} _active={{ bg: "teal.700" }} onClick={cb("ajouter-agent")} label="Ajouter Agent" icon={BsPersonAdd} aria-current="page" />
          
//         </Stack>
//       </Stack>
//       <Stack
//         spacing={{
//           base: '5',
//           sm: '6',
//         }}
//       >
//         <Stack spacing="1">
//           <NavButton bg="#056AA7" _hover={{ bg: "teal.500" }} _selected={{ bg: "teal.600" }} _active={{ bg: "teal.700" }} onClick={cb("profil")} label="Mon compte" icon={FaAddressCard} />
//           <NavButton bg="red.400" _hover={{ bg: "red.500" }} _selected={{ bg: "red.600" }} _active={{ bg: "red.700" }}  label="Se Déconnecter" icon={FiLogOut} />
//         </Stack>
        
//         <Divider borderColor="bg-accent-subtle" />
//         <UserProfile
//           name={"Issam BOURASS"}
//           image="https://media.licdn.com/dms/image/D4E35AQGgSu1VARo5vg/profile-framedphoto-shrink_200_200/0/1700277971867?e=1703134800&v=beta&t=L6uOOys62nz4-y8KnJxhadJv8BORxF43lwkpaqPRV0Q"
//           email={"issam.brs@gmail.com"}
//         />
//       </Stack>
//     </Stack>
//   </Flex>
// )}
