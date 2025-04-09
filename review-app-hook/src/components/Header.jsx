import React, { useContext } from 'react'
import Button from '../shared/Button'
import { Sun, Moon } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';

const Header = ({ text, bgColor, color }) => {

  const {theme, toggleTheme} = useContext(ThemeContext)

  const themeStyle = {
    header: {
      backgroundColor: theme === 'Light' ? '#fff' : bgColor,
      color: theme === 'Light' ? '#2d2d2d' : color
    },
    button: {
      backgroundColor: theme === 'Light' ? '#fff' : '#000',
      color: theme === 'Light' ? '#000' : '#fff',
      borderColor: theme === 'Light' ? '#2d2d2d' : '#ccc'
    }
  }

  return (
    <header style={themeStyle.header}>
        <div className='container'>
            <h1>{text}</h1>
        </div> 
        <Button type="text" version="primary" onClick={toggleTheme} style={themeStyle.button}>
          {theme === 'Light' ? (
            <>
              <Moon className="themeIcon"/>
              Dark
            </>
          ) : (
            <>
              <Sun className="themeIcon"/>
              Light
            </>
          )}
            </Button>
    </header>

  )
}

export default Header
