import React, {useState, useContext, useReducer, useEffect} from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    function clearCart() {
        dispatch({type: 'CLEAR_CART'})
    }

    function removeItem(itemID) {
        alert(itemID)
        dispatch({type: 'REMOVE_ITEM', payload: {itemID}})
    }

    return (
        <AppContext.Provider value={{...state, clearCart, removeItem}}>
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
