import { DarkModeContext } from '../../contexts/DarkModeProvider';
import { useContext, useState } from 'react';
import './search-box.css';
import MenuSelect from '../groupselect';
import LevelSelect from '../levelselect';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';

const SearchBox = ({
  query,
  handleSubmit,
  handleChange,
  handleAcademic,
  handleFinLit,
  handleFinLevel,
  handleKeyStage1,
  handleKeyStage2,
  refresh,
}) => {
  const theme = useContext(DarkModeContext);
  const { syntax, ui, bg, opacity, isDark } = theme.mode;

  return (
    <div className="flex flex-row items-center">
      <div
        className="flex-col mt-2 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="flex mt-2">
          <form className="flex" onSubmit={handleSubmit}>
            <input
              type="text"
              value={query}
              onChange={handleChange}
              className="border rounded-l sm:w-full text-black"
              style={{ background: bg, color: syntax }}
              placeholder="Search Game by Topic"
            />
            <button
              className="search-btn border rounded-r"
              type="submit"
              style={{ background: bg, color: syntax }}
            >
              <FaIcons.FaSearch className="h-5 w-5" />
            </button>
          </form>
          <button
            type="submit"
            className="search-btn border rounded-r ml-2.5"
            style={{ background: bg, color: syntax }}
            onClick={refresh}
            title="Click to Refresh Page"
            aria-label="Click to Refresh Page"
          >
            <HiIcons.HiRefresh />
          </button>
        </div>
        <div className="mt-2">
          <MenuSelect
            handleAcademic={handleAcademic}
            handleFinLit={handleFinLit}
          />
          <LevelSelect
            handleKeyStage1={handleKeyStage1}
            handleKeyStage2={handleKeyStage2}
            handleFinLevel={handleFinLevel}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

// <select className="game_labels ml-2">
//           <option onClick={() => setGameLabel('Academic')}>Academic</option>
//           <option onClick={() => setGameLabel('Finacial Literacy')}>
//             Finacial Literacy
//           </option>
//         </select>

// <label htmlFor="filter"></label>
// <select
// name="filter"
// id="filter"
// style={{ background: bg, color: syntax }}
// onSelect={handleSelect}
// >
// <option value={Group}>group</option>
// <option value={Level}>level</option>
// </select>
