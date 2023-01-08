import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export function AppProvider({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const openSubmenu = (text, {center, bottom}) => {
        console.log("received", text, center, bottom)
        setIsSubmenuOpen(true);
    };
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    const returnedValueObj = {
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
    }


    return (
        <AppContext.Provider value={returnedValueObj}>
            {children}
        </AppContext.Provider>
    );
}


export const useGlobalContext = () => {
    return useContext(AppContext);
};