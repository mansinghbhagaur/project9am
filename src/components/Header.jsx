import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Users from '../pages/Users';

const Header = () => {
      const { theme, ToggleTheme } = useContext(ThemeContext);

      const Theme = {
            'light': {
                  background: '#ffffff',
                  color: '#000',
            },
            'dark': {
                  background: '#ccc',
                  color: '#fff'
            }
      }

      return (
            <div style={{
                  background: Theme[theme].background,
                  minHeight: '100vh',
                  color: Theme[theme].color,
            }}>
                  <h1>Current Theme</h1>
                  <button onClick={ToggleTheme}>{theme === 'light' ? 'dark Toggle' : 'light Toggle'}</button>
                  <Users />
            </div>
      )
}

export default Header
