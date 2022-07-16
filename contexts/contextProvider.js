import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sidebarIsOpened, setSidebarIsOpened] = useState(false);
  const [userStatusToken, setUserStatusToken] = useState("");
  return (
    <StateContext.Provider value={{ sidebarIsOpened, setSidebarIsOpened, setUserStatusToken, userStatusToken }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
