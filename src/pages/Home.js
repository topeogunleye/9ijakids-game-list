import React, { useState, useContext, useEffect } from 'react';
import SearchBox from '../components/search-box/search-box';
import GAME_DATA from '../components/game.data';
import GamePreview from '../components/game-preview/gamepreview.component';
import ThemeToggle from '../components/theme-toggle/ThemeToggle';
import { DarkModeContext } from '../contexts/DarkModeProvider';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [query, setQuery] = useState('');

  const [games, setGames] = useState(GAME_DATA);
  const [filteredGames, setFilteredGames] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const refresh = () => {
    // it re-renders the component
    setFilteredGames(GAME_DATA);
  };

  useEffect(() => {
    setFilteredGames(
      games.filter((game) =>
        game.Topic.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [games, query]);

  const handleAcademic = () => {
    console.log('Academic');
    setFilteredGames(
      games.filter((game) => game.Group.toLowerCase().includes('academic'))
    );
    console.log(filteredGames);
  };

  const handleFinLit = () => {
    console.log('FinLit');
    setFilteredGames(
      games.filter((game) =>
        game.Group.toLowerCase().includes('financial literacy')
      )
    );
    console.log(filteredGames);
  };

  const handleFinLevel = () => {
    console.log('FinLev');
    setFilteredGames(
      games.filter((game) =>
        game.Level.toLowerCase().includes('financial literacy')
      )
    );
    console.log(filteredGames);
  };

  const handleKeyStage1 = () => {
    console.log('KeyStage1');
    setFilteredGames(
      games.filter((game) => game.Level.toLowerCase().includes('key stage 1'))
    );
    console.log(filteredGames);
  };

  const handleKeyStage2 = () => {
    console.log('KeyStage2');
    setFilteredGames(
      games.filter((game) => game.Level.toLowerCase().includes('key stage 2'))
    );
    console.log(filteredGames);
  };

  const theme = useContext(DarkModeContext);
  const { syntax, ui } = theme.mode;

  return (
    <div
      className="bg-gray-500 text-white min-h-screen flex flex-col items-center justify-center text-center mb-8"
      style={{ background: ui, color: syntax }}
    >
      <div className="max-w-md sm:max-w-lg md:max-w-5xl flex flex-col items-center justify-center text-center mb-8 min-h-screen">
        <div
          className="absolute top-5 right-1 sm:right-5 lg:right-10
          "
        >
          <ThemeToggle
            className="cursor-pointer focus:outline-none"
            id="random"
          />
        </div>

        <h1 className="font-black text-2xl logo-signature">
          9ijakids Kids Game
        </h1>

        <SearchBox
          query={query}
          handleChange={handleChange}
          Group={filteredGames.Group}
          Level={filteredGames.Level}
          handleAcademic={handleAcademic}
          handleFinLit={handleFinLit}
          handleFinLevel={handleFinLevel}
          handleKeyStage1={handleKeyStage1}
          handleKeyStage2={handleKeyStage2}
          refresh={refresh}
        />

        <div id="meals" className="meals">
          {filteredGames.map((game) => (
            <GamePreview game={game} key={uuidv4()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
