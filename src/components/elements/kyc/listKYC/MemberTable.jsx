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
import ModalBtn from './ModalBtn';
import { EditIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export const MemberTable = ({ members, startIndex, endIndex }) => (


  
  <Table>
    <Thead>
      <Tr bgColor={'gray.200'}>
      <Th>Le nom complet</Th>
        <Th>N° pièce d'identité</Th>
        <Th>Date de Naissance</Th>
        <Th>Télephone</Th>
        <Th>Validité pièce d’identité</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      {members.slice(startIndex, endIndex).map((member) => (
        <Tr key={member.id}>
          <Td>
              <Badge size="sm" colorScheme={'blue'}>
                {member.title}  {member.firstName} {member.lastName}
              </Badge>
          </Td>
          <Td>
            <HStack spacing="3">
              <Box>
                <Text color="muted">{member.idNumber}</Text>
              </Box>
            </HStack>
          </Td>
          <Td>
            <Text fontWeight="medium">{member.dateOfBirth}</Text>
          </Td>
          <Td>
            <Text color="muted">
            <Text color="muted">{member.gsm}</Text>
            </Text>
          </Td>

          <Td>
            <Text color="muted">{member.idExpirationDate}</Text>
          </Td>
          
          <Td>
            <HStack spacing="1">
              <Link to={`/dash/ajouter-to-kyc/${member.idNumber}`} aria-label="Home">
                <IconButton icon={<EditIcon fontSize="1.25rem" />} colorScheme='teal' aria-label="edit" />
               </Link>
              <DeleteItem  name={member.name} rib={member.rib} cin={member.cin}/>
              
            </HStack>
          </Td>
        
        </Tr>
      ))}
    </Tbody>
  </Table>
);


