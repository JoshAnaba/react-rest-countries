import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

const Theme = ({children}) => {
  return (
    <ThemeContext.Provider>
      {children}
    </ThemeContext.Provider>
  )
}

export default Theme
