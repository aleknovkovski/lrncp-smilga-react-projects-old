import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export function AppProvider({children}) {
    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};