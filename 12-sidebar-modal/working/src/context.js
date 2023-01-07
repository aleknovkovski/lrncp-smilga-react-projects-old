import React, {useState, useContext} from 'react'

export const AppContext = React.createContext();

export function AppProvider({children}) {
    return (
        <AppContext.Provider value="hello">
            {children}
        </AppContext.Provider>
    )
}