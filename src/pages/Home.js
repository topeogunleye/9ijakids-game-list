import React, { useState, useContext, useEffect } from 'react';
// import { DarkModeContext } from '../contexts/DarkModeProvider';
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

  const handleSelect = (event) => {
    console.log(event.target.value);
  };

  useEffect(() => {
    setFilteredGames(
      games.filter((game) =>
        game.Topic.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [games, query]);

  // setDisplayGames(filteredGames);

  const handleAcademic = () => {
    console.log('Academic');
    setFilteredGames(
      games.filter((game) => game.Group.toLowerCase().includes('academic'))
    );
    // setDisplayGames(filteredGames);
    console.log(filteredGames);
  };

  const handleFinLit = () => {
    console.log('FinLit');
    setFilteredGames(
      games.filter((game) =>
        game.Group.toLowerCase().includes('financial literacy')
      )
    );
    // setDisplayGames(filteredGames);
    console.log(filteredGames);
  };

  const handleKeyStage1 = () => {
    console.log('KeyStage1');
    setFilteredGames(
      games.filter((game) => game.Level.toLowerCase().includes('key stage 1'))
    );
    // setDisplayGames(filteredGames);
    console.log(filteredGames);
  };

  const handleKeyStage2 = () => {
    console.log('KeyStage2');
    setFilteredGames(
      games.filter((game) => game.Level.toLowerCase().includes('key stage 2'))
    );
    // setDisplayGames(filteredGames);
    console.log(filteredGames);
  };

  const theme = useContext(DarkModeContext);
  const { syntax, ui } = theme.mode;

  return (
    <div
      className="bg-gray-500 text-white min-h-screen flex flex-col items-center justify-center text-center mb-8"
      style={{ background: ui, color: syntax }}
    >
      <div className="max-w-md sm:max-w-lg md:max-w-5xl flex flex-col items-center justify-center text-center mb-8">
        <div
          className="absolute top-5 right-10
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
          handleKeyStage1={handleKeyStage1}
          handleKeyStage2={handleKeyStage2}
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

// <div className="">
// <select className="game_labels ml-2">
//   <option onClick={() => setGameGroup('Academic')}>Academic</option>
//   <option onClick={() => setGameLevel('Finacial Literacy')}>
//     Finacial Literacy
//   </option>
// </select>
// </div>

// <h1>Filter By Group</h1>
// {filterGroup.map((game) => (
//   <GamePreview game={game} key={uuidv4()} />
// ))}
// <h1>Filter By Level</h1>
// {filterLevel.map((game) => (
//   <GamePreview game={game} key={uuidv4()} />
// ))}

export default Home;
