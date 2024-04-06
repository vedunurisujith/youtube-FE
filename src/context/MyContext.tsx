import VideoGrid from '@/components/VideoGrid';
import React, { createContext, useState, ReactNode } from 'react';


type MyContextType = {
  currentState: React.ReactElement;
  setCurrentState: (component: React.ReactElement) => void;
  isSideBarOpen: boolean,
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultState = {
  currentState: <VideoGrid />,
  setCurrentState: () => {}, 
  isSideBarOpen: false,
  setIsSideBarOpen: () => {},
};

export const MyContext = createContext<MyContextType>(defaultState);

interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [currentState, setCurrentState] = useState<React.ReactElement>(defaultState.currentState);
  const [isSideBarOpen, setIsSideBarOpen] = useState(defaultState.isSideBarOpen);
  const contextValue = {
    currentState,
    setCurrentState,
    isSideBarOpen,
    setIsSideBarOpen,

  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};
