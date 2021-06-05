import { DarkModeContext } from '../../contexts/DarkModeProvider';
import { useContext } from 'react';
import './search-box.css';

const SearchBox = ({ query, handleChange, handleSubmit, Group, Level }) => {
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
          <div className="">
            <label htmlFor="filter"></label>
            <select
              name="filter"
              id="filter"
              style={{ background: bg, color: syntax }}
              onSelect={console.log('selected')}
            >
              <option value={Group}>group</option>
              <option value={Level}>level</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
