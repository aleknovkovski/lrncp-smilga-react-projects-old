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

    useEffect(()=>{
        dispatch({type: 'CALCULATE_TOTALS'})
    }, [state.cart])

    function clearCart() {
        dispatch({type: 'CLEAR_CART'})
    }

    function removeItem(itemID) {
        dispatch({type: 'REMOVE_ITEM', payload: {itemID}})
    }

    function increaseItem(itemID) {
        dispatch({type: 'INCREASE_ITEM', payload: {itemID}})
    }

    function decreaseItem(itemID) {
        dispatch({type: 'DECREASE_ITEM', payload: {itemID}})
    }

    const returnedValueObj = {...state, clearCart, removeItem, increaseItem, decreaseItem}

    return (
        <AppContext.Provider value={returnedValueObj}>
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
