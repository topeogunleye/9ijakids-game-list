import { DarkModeContext } from '../../contexts/DarkModeProvider';
import { useContext, useState } from 'react';
import './search-box.css';
import MenuSelect from '../groupselect';
import LevelSelect from '../levelselect';

const SearchBox = ({
  query,
  handleChange,
  handleSubmit,
  Group,
  Level,
  handleSelect,
  handleAcademic,
  handleFinLit,
}) => {
  const theme = useContext(DarkModeContext);
  const { syntax, ui, bg, opacity, isDark } = theme.mode;

  return (
    <div className="flex flex-col items-center sm:flex-row">
      <div className="flex mt-2">
        <form className="flex" onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            className="border rounded sm:w-full text-black"
            style={{ background: bg, color: syntax }}
            placeholder="Search Game by Topic"
          />
        </form>
        <MenuSelect
          handleAcademic={handleAcademic}
          handleFinLit={handleFinLit}
        />
        <LevelSelect />
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
