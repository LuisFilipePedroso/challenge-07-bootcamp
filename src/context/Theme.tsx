import React, { createContext } from 'react';

interface IProps {
  toggleTheme(): void;
  children?: any;
}

export const ThemeContext = createContext<IProps | null>(null);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function ThemeProvider({ toggleTheme, children }: IProps) {
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
