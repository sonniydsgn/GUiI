import React, { createContext, useState, useContext } from "react";

const NavigationContext = createContext(null);

export const NavigationProvider = ({ children }) => {
  const [navigationState, setNavigationState] = useState({ activeTab: false });

  return (
    <NavigationContext.Provider value={{ navigationState, setNavigationState }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("Ошибка контекста");
  }

  return context;
};
