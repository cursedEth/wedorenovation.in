import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  //* SETTING UP STATES
  const [isAlertOpen, setIsAlertOpen] = useState(true);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //*FUNCTIONS
  const closeAlert = () => setIsAlertOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  // *RETURNS
  return (
    <AppContext.Provider
      value={{
        isAlertOpen,
        closeAlert,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
