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
import DeleteItem from './DeleteItem';

export const MemberTable = ({ members, startIndex, endIndex }) => (
  <Table>
    <Thead>
      <Tr bgColor={'gray.200'}>
        <Th>RIB</Th>
        <Th>Le nom complet</Th>
        <Th>Cin</Th>
        <Th>Date de Naissance</Th>
        <Th>Télephone</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      {members.slice(startIndex, endIndex).map((member) => (
        <Tr key={member.id}>
          <Td>
              <Badge size="sm" colorScheme={'red'}>
                  {member.rib}
              </Badge>
          </Td>
          <Td>
            <HStack spacing="3">
              <Box>
                <Text fontWeight="medium">{member.name}</Text>
              </Box>
            </HStack>
          </Td>
          <Td>
            <Text color="muted">{member.cin}</Text>
          </Td>
          <Td>
            <Text color="muted">{member.dateNaissance}</Text>
          </Td>
          <Td>
            <Text color="muted">
            <Text color="muted">{member.tel}</Text>
            </Text>
          </Td>
          <Td>
            <HStack spacing="1">
              <DeleteItem  name={member.name} rib={member.rib} cin={member.cin}/>
              
            </HStack>
          </Td>
        
        </Tr>
      ))}
    </Tbody>
  </Table>
);


