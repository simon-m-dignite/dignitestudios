import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Theme Toggle:
  const [theme, setTheme] = useState("light");
  const [palette, setPalette] = useState({
    brandOrange: "#F15C20",
    brandRed: "#EF3C36",
    background: "#222222",
    dark_contrast_background: "#2d2d2d",
    light_contrast_background: "#2D2D2D",
    color: "#fff",
    dark_contrast_color: "#E7E7E7",
    light_contrast_color: "#B4B4B4",
  });

  useEffect(() => {
    if (theme == "dark") {
      setPalette({
        brandOrange: "#F15C20",
        brandRed: "#EF3C36",
        background: "#222222",
        dark_contrast_background: "#2d2d2d",
        light_contrast_background: "#393939",
        color: "#fff",
        dark_contrast_color: "#E7E7E7",
        light_contrast_color: "#B4B4B4",
      });
    } else {
      setPalette({
        brandOrange: "#F15C20",
        brandRed: "#EF3C36",
        background: "#fff",
        dark_contrast_background: "#fdfdfd",
        light_contrast_background: "#e7e7e7",
        color: "#000",
        dark_contrast_color: "#B4B4B4",
        light_contrast_color: "#8f8f8f",
      });
    }
  }, [theme]);
  return (
    <GlobalContext.Provider
      value={{ isOpen, setIsOpen, palette, setTheme, theme }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};
