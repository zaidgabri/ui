import {
  Box,
  Button,
  ButtonGroup,
  CloseButton,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';

const Notification = ({ errorMessage }) => (
  <Box
    as="section"
    pt={{
      base: '4',
      md: '8',
    }}
    pb={{
      base: '12',
      md: '24',
    }}
    px={{
      base: '4',
      md: '8',
    }}
  >
    <Flex direction="row-reverse">
      <Box
        width={{
          base: 'full',
          sm: 'md',
        }}
        boxShadow={useColorModeValue('md', 'md-dark')}
        bg="bg-surface"
        borderRadius="lg"
      >
        <Stack direction="row" p="4" spacing="3">
          <Stack spacing="2.5">
            <Stack spacing="1">
              <Text fontSize="sm" fontWeight="medium">
                Updates Available
              </Text>
              <Text fontSize="sm" color="muted">
              { errorMessage }
              </Text>
            </Stack>
            {/* <ButtonGroup variant="link" size="sm" spacing="3">
              <Button>Skip</Button>
              <Button colorScheme="blue">Update</Button>
            </ButtonGroup> */}
          </Stack>
          <CloseButton transform="translateY(-6px)" />
        </Stack>
      </Box>
    </Flex>
  </Box>
);

export default Notification;