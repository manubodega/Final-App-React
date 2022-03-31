// context.js
import React from 'react';

export const themes = {
  light: {
    primary_color: '#000000',
    secondary_color: '#eeeeee'
  },
  dark: {
    primary_color: '#ffffff',
    secondary_color: '#5f7f7a'
  }
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;