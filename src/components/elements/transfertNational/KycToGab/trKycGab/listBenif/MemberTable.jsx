// MemberTable.jsx

import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  Text,
  IconButton,
  Box,
  Badge
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export const MemberTable = ({ members, startIndex, endIndex, onAddClick }) => {
  // Log the members data to the console
  console.log('Members Data:', members);

  return (
    <Table>
      <Thead>
        <Tr bgColor={'gray.200'}>
          <Th>RIB</Th>
          <Th>Nom</Th>
          <Th>Prénom</Th>
          <Th>Télephone</Th>
          <Th>Ajouter</Th>
        </Tr>
      </Thead>
      <Tbody>
        {members.slice(startIndex, endIndex).map((member) => (
          <Tr key={member.id}>
            <Td>
                <Badge size="sm" colorScheme={'teal'}>
                    {member.rib}
                </Badge>
            </Td>
            <Td>
              <HStack spacing="3">
                <Box>
                  <Text fontWeight="medium">{member.lastName}</Text>
                </Box>
              </HStack>
            </Td>
            <Td>
              <Text color="muted">{member.firstName}</Text>
            </Td>
           
            <Td>
              <Text color="muted">
              <Text color="muted">{member.phone}</Text>
              </Text>
            </Td>
            <Td>
              <HStack spacing="1">
              <IconButton icon={<AddIcon fontSize="1.25rem" />} colorScheme='green' aria-label="Add"
               onClick={() => onAddClick({
                rib: member.rib,
                firstName: member.firstName,
                lastName: member.lastName,
                phone: member.phone,
              })} />
                
              </HStack>
            </Td>
          
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

