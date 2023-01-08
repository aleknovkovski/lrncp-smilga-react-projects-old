import React, {useState, useContext} from 'react'

export const AppContext = React.createContext();

export function AppProvider({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <AppContext.Provider value="hello">
            {children}
        </AppContext.Provider>
    )
}

export function useGlobalContext () {
    return useContext(AppContext);
};