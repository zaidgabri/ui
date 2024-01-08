import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
} from '@chakra-ui/react';

const ParametragePlafond = () => {
  const [plafondJournalier, setPlafondJournalier] = useState(0);

  const handlePlafondChange = (event) => {
    setPlafondJournalier(event.target.value);
  };

  const savePlafond = () => {
    // Mettez ici la logique pour sauvegarder le plafond dans le service BackOffice
    console.log(`Plafond sauvegardé : ${plafondJournalier}`);
    // Vous pouvez également faire une requête à l'API ici pour enregistrer le plafond
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Heading as="h2" size="md" mb={4}>
        Paramétrage des Plafonds journalier des transferts émis par un point de vente
      </Heading>
      <FormControl>
        <FormLabel htmlFor="plafond">Plafond Journalier (en dirhams) :</FormLabel>
        <Input
          type="number"
          id="plafond"
          value={plafondJournalier}
          onChange={handlePlafondChange}
        />
      </FormControl>
      <Button mt={4} colorScheme="teal" onClick={savePlafond}>
        Sauvegarder
      </Button>
    </Box>
  );
};

export default ParametragePlafond;
