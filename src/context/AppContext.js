import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [startShow, setStartShow] = useState(false);

  const setStart = () => {
    setStartShow(true);
  };

  return (
    <AppContext.Provider value={{ startShow, setStart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
