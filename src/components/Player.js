import React, { useContext } from 'react';
import { GameContext } from '../Context/GameContext';
import CardList from './CardList';

export default function Player({
  player,
  hand,
}) 


{
  const { to, setTo } = useContext(GameContext);
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
      />
    </div>
  );
}
