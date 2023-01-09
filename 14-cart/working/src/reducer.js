function removeCartItem(currentCart, itemId) {
    return currentCart.filter((item)=> item.id !== itemId)
}

const reducer = (state, action) => {
    if(action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }

    if(action.type === 'REMOVE_ITEM') {
        const newCart = removeCartItem(state.cart, action.payload.itemID)
        return {...state, cart: newCart}
    }

    if(action.type === 'INCREASE_ITEM') {
        const newCart = state.cart.map((item)=> {
            if(item.id === action.payload.itemID) {
                return {...item, amount: item.amount +1}
            }
            return item
        })
        return {...state, cart: newCart}
    }

    if(action.type === 'DECREASE_ITEM') {
        const newCart = state.cart.map((item)=> {
            if(item.id === action.payload.itemID) {
                if(item.amount>0) {
                    return {...item, amount: item.amount -1}
                }
            }
            return item
        })
        return {...state, cart: newCart}
    }

    return state
}

export default reducer