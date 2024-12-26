import React, { createContext, useContext, useState } from 'react';

// 1. Create a Context
//Use useContext when you need to share data across multiple components without passing props manually.
const ThemeContext = createContext();

// 2. Create a Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Component that uses the context
function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
      }}
    >
      <p>
        The current theme is <strong>{theme}</strong>
      </p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

// 4. Context Component
function Context() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

export default Context;
