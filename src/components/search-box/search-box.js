import { DarkModeContext } from '../../contexts/DarkModeProvider';
import { useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import './search-box.css';

const SearchBox = ({ query, handleChange, handleSubmit }) => {
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
      </div>
    </div>
  );
};

export default SearchBox;
