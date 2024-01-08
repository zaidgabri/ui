import { Button, HStack, Icon, Text } from '@chakra-ui/react';
import * as React from 'react';

export const NavButton = ({ icon, label, onClick, isSelected, variantColor, ...buttonProps }) => {
  const backgroundColor = isSelected ? `${variantColor}.400` : label === 'Se Déconnecter' ? 'red.400' : '#056AA7';

  return (
    <Button
      variant="ghost"
      justifyContent="start"
      color={isSelected ? 'white' : 'on-accent-subtle'}
      bg={backgroundColor}
      _hover={{ bg: isSelected ? `${variantColor}.600` : `${variantColor}.500` }}
      _focus={{ outline: 'none' }}
      onClick={onClick}
      {...buttonProps}
    >
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" />
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
};


