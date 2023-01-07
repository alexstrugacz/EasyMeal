import React, { useState } from 'react';
import RecipeModal from './RecipeModal/RecipeModal';

type ResultsSectionProps = {
  show: boolean;
};

const ResultsSection: React.FC<ResultsSectionProps> = ({ show }) => {
  const [showModal, setShowModal] = useState(show);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <RecipeModal onClose={() => setShowModal(false)} show={showModal} />
    </div>
  );
};

export default ResultsSection;
