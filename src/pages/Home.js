import React, { useState, useContext, useEffect } from 'react';
import SearchBox from '../components/search-box/search-box';
import GAME_DATA from '../components/game-data/game.data';
import GamePreview from '../components/game-preview/gamepreview.component';
import ThemeToggle from '../components/theme-toggle/ThemeToggle';
import { DarkModeContext } from '../contexts/DarkModeProvider';
import { v4 as uuidv4 } from 'uuid';
import SkeletonHeader from '../skeletons/SkeletonHeader';
import logo from './logo.png';
import * as FaIcons from 'react-icons/fa';

const Home = () => {
  const [query, setQuery] = useState('');

  const [games, setGames] = useState(GAME_DATA);
  const [filteredGames, setFilteredGames] = useState(false);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    // setQuery(event.target.value);

    event.preventDefault();
  };

  const refresh = () => {
    // it re-renders the component
    setFilteredGames(GAME_DATA);
  };

  useEffect(() => {
    setTimeout(async () => {
      setFilteredGames(
        games.filter((game) =>
          game.Topic.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 2500);
  }, [games, query]);

  const handleAcademic = () => {
    setFilteredGames(false);
    setTimeout(async () => {
      setFilteredGames(
        games.filter((game) => game.Group.toLowerCase().includes('academic'))
      );
    }, 2500);
  };

  const handleFinLit = () => {
    setFilteredGames(false);
    setTimeout(async () => {
      setFilteredGames(
        games.filter((game) =>
          game.Group.toLowerCase().includes('financial literacy')
        )
      );
    }, 2500);
  };

  const handleFinLevel = () => {
    setFilteredGames(false);
    setTimeout(async () => {
      setFilteredGames(
        games.filter((game) =>
          game.Level.toLowerCase().includes('financial literacy')
        )
      );
    }, 2500);
  };

  const handleKeyStage1 = () => {
    setFilteredGames(false);
    setTimeout(async () => {
      setFilteredGames(
        games.filter((game) => game.Level.toLowerCase().includes('key stage 1'))
      );
    }, 2500);
  };

  const handleKeyStage2 = () => {
    setFilteredGames(false);
    setTimeout(async () => {
      setFilteredGames(
        games.filter((game) => game.Level.toLowerCase().includes('key stage 2'))
      );
    }, 2500);
  };

  const theme = useContext(DarkModeContext);
  const { syntax, ui, bg, isDark } = theme.mode;
  const loaderTheme = isDark ? 'dark' : 'light';

  return (
    <div
      className="bg-gray-500 text-white min-h-screen flex flex-col items-center justify-center text-center mb-8"
      style={{ background: ui, color: syntax }}
    >
      <div className="max-w-md sm:max-w-lg md:max-w-5xl flex flex-col items-center  text-center mb-8 min-h-screen">
        <div
          className="absolute top-5 right-1 sm:right-5 lg:right-10
          "
        >
          <ThemeToggle
            className="cursor-pointer focus:outline-none"
            id="random"
          />
        </div>
        <div
          className="absolute top-36 sm:top-20 right-1 sm:right-5 lg:right-10
        "
          title="Check Code on GitHub"
          aria-label="Check Code on GitHub"
        >
          <a
            href="https://github.com/topeogunleye/9ijakids-game-list"
            target="blank"
          >
            <FaIcons.FaGithub
              className="focus:outline-none my-auto rounded-full w-10 h-10 grid place-items-center ml-2.5"
              style={{ background: bg, color: syntax }}
            />
          </a>
        </div>
        <img src={logo} alt="logo" className="w-10 sm:w-24 mt-2" />
        <h1 className="font-black text-2xl logo-signature mt-2">
          9ijakids Kids Game
        </h1>

        <SearchBox
          query={query}
          handleSubmit={handleSubmit}
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
        {!filteredGames ? (
          [1, 2, 3, 4, 5].map((n) => (
            <SkeletonHeader key={n} theme={loaderTheme} />
          ))
        ) : (
          <div id="meals" className="meals">
            {filteredGames &&
              filteredGames.map((game) => (
                <GamePreview game={game} key={uuidv4()} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
