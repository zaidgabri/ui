import { Box, Drawer, DrawerContent, DrawerOverlay, Flex, useDisclosure } from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from './Logo'
import { Sidebar } from './Sidebar'
import { ToggleButton } from './ToggleButton'

export const Navbar = ({cb}) => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  return (
    <Box
      width="full"
      py="4"
      px={{
        base: '4',
        md: '8',
      }}
      // bg="bg-accent"
      colorScheme="teal.500"
      
    >
      <Flex justify="space-between">
        <Logo />
        <ToggleButton isOpen={isOpen} aria-label="Open Menu" onClick={onToggle} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          isFullHeight
          preserveScrollBarGap
          // Only disabled for showcase
          trapFocus={false}
        >
          <DrawerOverlay />
          <DrawerContent height={"100vh"}>
            <Sidebar cb={cb} />
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}
