import './App.css';
import { useContext } from 'react';
import ExecutePassButton from './components/ExecutePassButton';
import { GameContext } from './Context/GameContext';

function App() {
  
  const {
    Player1,
    Player2,
    Player3,
    Deck,
    selectedCard } = useContext(GameContext);

  return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player1 />
        <Player2 />
        <Player3 />
        <Deck />
      </section>
      <section>
        {selectedCard && (
          <ExecutePassButton />
        )}
      </section>
    </div>
  );
}

export default App;
