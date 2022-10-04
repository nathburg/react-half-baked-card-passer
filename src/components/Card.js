import React, { useContext } from 'react';
import { GameContext } from '../Context/GameContext';

const suitMap = {
  hearts: '❤️',
  spades: '♠️',
  clubs: '♣️',
  diamonds: '♦️',
};

export default function Card({ card, player }) {
  const { setFrom, selectedCard, setSelectedCard } = useContext(GameContext);
  
  function handleCardClick() {
    setFrom(player);
    setSelectedCard(card);
  }
  
  // if there IS a selected card, and it has the same value and suit as THIS card, style it differently
  const thisIsTheSelectedCard = selectedCard && selectedCard.value === card.value && selectedCard.suit === card.suit;


  return (
    <div className={`${thisIsTheSelectedCard ? 'selected' : ''} card`} 
      onClick={handleCardClick}>
      <div>{suitMap[card.suit]}</div>
      <div>{card.value}</div>
    </div>
  );
}
