import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export function AppProvider({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};