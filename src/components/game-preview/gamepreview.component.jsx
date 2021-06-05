import { DarkModeContext } from '../../contexts/DarkModeProvider';
import { useContext } from 'react';
import React, { PureComponent } from 'react';
import './game-preview.css';

const GamePreview = ({ game }) => {
  const theme = useContext(DarkModeContext);
  const { syntax, ui, bg, opacity, isDark } = theme.mode;
  return (
    <div
      className="meal hover:shadow-lg"
      key={game.GameTitle}
      style={{ background: bg, color: syntax }}
    >
      <img
        src={game.GameImage}
        alt="stew"
        className="h-40 sm:h-40 w-full object-cover hover:opacity-75 transition-opacity duration-200 ease-in"
      />
      <div className="m-4">
        <span className="font-bold">{game.GameTitle}</span>
        <span className="block text-sm">{game.GameDescription}</span>
      </div>
    </div>
  );
};

export default GamePreview;
