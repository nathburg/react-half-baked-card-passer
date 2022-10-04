import { createContext, useState } from 'react';
import initialCards from '../cards-data';
import Player from '../components/Player';


const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  function Player1() {
    return <Player player={1} hand={playerOneHand} />;
  }
  
  function Player2() {
    return <Player player={2} hand={playerTwoHand} />;
  } 

  function Player3() {
    return <Player player={3} hand={playerThreeHand} />;
  }
  
  function Deck() {
    return <Player player={'deck'} hand={deck} />;
  }
  
  function findCardIndex(value, suit, cards) {
    return cards.findIndex((card) => card.value === value && card.suit === suit);
  }
  
  function passCard(card) {
    const playerHands = [playerOneHand, playerTwoHand, playerThreeHand];
    const playerHandSetFunctions = [setPlayerOneHand, setPlayerTwoHand, setPlayerThreeHand];

    // arrays start at zero, but our players start at 1 :shrug:
    const toHand = playerHands[to - 1] || deck;
    const fromHand = playerHands[from - 1] || deck;

    const toSetFunction = playerHandSetFunctions[to - 1] || setDeck;
    const fromSetFunction = playerHandSetFunctions[from - 1] || setDeck;

    const cardToMoveIndex = findCardIndex(card.value, card.suit, fromHand);
    const [cardToMove] = fromHand.splice(cardToMoveIndex, 1);

    toHand.push(cardToMove);

    toSetFunction([...toHand]);
    fromSetFunction([...fromHand]);

    setSelectedCard(null);
  }

  return <GameContext.Provider value={{ 
    deck, setDeck,
    setPlayerOneHand,
    setPlayerTwoHand,
    setPlayerThreeHand,
    selectedCard, setSelectedCard,
    from, setFrom,
    to, setTo,
    passCard,
    Player1,
    Player2,
    Player3,
    Deck
  }}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext };