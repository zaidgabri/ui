// Motifs.js
import React from 'react';
import { Select } from '@chakra-ui/react';

const motifs = [
  "Soutien familial",
  "Epargne/investissement",
  "Cadeau",
  "Paiement de biens et de services",
  "Frais de dépassement",
  "Frais d’éducation",
  "Location/Hypothèque",
  "Aide de secours/Médicale",
  "Revenu d’un site internet",
  "Dépenses salariales",
  "Frais de loterie ou récompense/taxes",
  "Prêt",
  "Commerce sur internet",
  "Donation",
  "Autres (à préciser)",
];

const Motifs = () => {
  return (
    <>
      {motifs.map((motif) => (
        <option key={motif} value={motif}>
          {motif}
        </option>
      ))}
    </>
  );
};

export default Motifs;