import React, { createContext, useContext, useEffect, useState } from 'react';

const StateContext = createContext();
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#1A97F5');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);

  const handleClick = (clicked) => {
    setIsClicked({...initialState, [clicked]: true})
  }
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value)
  }
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', e.target.value)
  }

  return (
    <StateContext.Provider value={{ 
      activeMenu,
      setActiveMenu,
      isClicked, 
      setIsClicked,
      handleClick,
      screenSize, setScreenSize,
      currentColor, currentMode,
      setColor, setMode,
      themeSettings, setThemeSettings
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);