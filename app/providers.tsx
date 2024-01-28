"use client";

import { createContext } from "react";

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }: any) => {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
