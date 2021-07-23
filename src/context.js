import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  //* SETTING UP STATES
  const [isAlertOpen, setIsAlertOpen] = useState(true);
  const [menu, setMenu] = useState({ aboutMenu: false, servicesMenu: false });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //*FUNCTIONS
  // # TOP ALERT
  const closeAlert = () => setIsAlertOpen(false);

  // #SIDEBAR
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  // #DROPDOWN MENU
  const toggleAboutMenu = () =>
    setMenu({ ...menu, aboutMenu: !menu.aboutMenu });
  const toggleServicesMenu = () =>
    setMenu({ ...menu, servicesMenu: !menu.servicesMenu });
  const openAboutMenu = () => setMenu({ ...menu, aboutMenu: true });
  const closeAboutMenu = () => setMenu({ ...menu, aboutMenu: false });
  const openServicesMenu = () => setMenu({ ...menu, servicesMenu: true });
  const closeServicesMenu = () => setMenu({ ...menu, servicesMenu: false });

  // *RETURNS
  return (
    <AppContext.Provider
      value={{
        isAlertOpen,
        closeAlert,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        menu,
        setMenu,
        openAboutMenu,
        closeAboutMenu,
        openServicesMenu,
        closeServicesMenu,
        toggleAboutMenu,
        toggleServicesMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
