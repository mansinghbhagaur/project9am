import { useContext } from 'react';
import { MdSunny } from "react-icons/md";
import { ThemeContext } from '../context/ThemeContext';
import { MdOutlineWbSunny } from "react-icons/md";

import Users from '../pages/Users';

 const Header = () => {
  const { theme, ToggleTheme } = useContext(ThemeContext);

   const Theme = {
    'light': {
      background: '#fff',
      color: '#000',
    },
    'black': {
      background: '#000',
      color: '#fff',
    },
  };

  return (
    <div
      style={{
        background: Theme[theme].background,
        minHeight: '100vh',
        color: Theme[theme].color,
        padding: '20px',
      }}
    >
      <h1 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Current Theme
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px', 
            cursor: 'pointer', 
          }}
          onClick={ToggleTheme}
        >
          {theme === 'light' ? <MdSunny /> : <MdOutlineWbSunny />}
        </span>
      </h1>

      <Users />
    </div>
  );
};

export default Header;
