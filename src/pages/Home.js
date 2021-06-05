import React, { Fragment, useState, useContext } from 'react';
// import { DarkModeContext } from '../contexts/DarkModeProvider';
import SearchBox from '../components/search-box/search-box';
import GAME_DATA from '../components/game.data';
import GamePreview from '../components/game-preview/gamepreview.component';
import ThemeToggle from '../components/theme-toggle/ThemeToggle';
import { DarkModeContext } from '../contexts/DarkModeProvider';

const Home = () => {
  const [query, setQuery] = useState('');

  const [games, setGames] = useState(GAME_DATA);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredGames = games.filter((game) =>
    game.Topic.toLowerCase().includes(query.toLowerCase())
  );

  const theme = useContext(DarkModeContext);
  const { syntax, ui, bg, opacity, isDark } = theme.mode;
  const loaderTheme = isDark ? 'dark' : 'light';

  return (
    <div
      className="bg-gray-500 text-white min-h-screen flex flex-col items-center justify-center text-center mb-8"
      style={{ background: ui, color: syntax }}
    >
      <div className="m-auto max-w-md sm:max-w-lg md:max-w-5xl flex flex-col items-center justify-center text-center mb-8">
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

        <SearchBox query={query} handleChange={handleChange} />

        <div id="meals" className="meals">
          {filteredGames.map((game) => (
            <GamePreview game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
