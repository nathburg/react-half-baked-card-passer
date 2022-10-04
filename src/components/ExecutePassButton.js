import React, { useContext } from 'react';
import { GameContext } from '../Context/GameContext';
import Card from './Card';

export default function ExecutePassButton() {
  const { 
    passCard,
    from,
    to,
    selectedCard,
  } = useContext(GameContext);

  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} /> from{' '}
      {from} to {to}
    </div>
  );
}
