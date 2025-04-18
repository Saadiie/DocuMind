import { createContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isMinimized, setIsMinimized] = useState();

  const handleToggle = () => {
    setIsMinimized(!isMinimized);
  };

  return <SidebarContext.Provider value={{ isMinimized, handleToggle }}>{children}</SidebarContext.Provider>;
};
