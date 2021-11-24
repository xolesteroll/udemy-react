export const initialState = {
    items: [],
    totalAmount: 0
}


const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existingCartIteIndex = state.items.findIndex(item => item.id === action.item.id)
            const existingCartItem = state.items[existingCartIteIndex]

            let updatedItems

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                }

                updatedItems = [...state.items]
                updatedItems[existingCartIteIndex] = updatedItem
            } else {
                updatedItems = state.items.concat(action.item)
            }
            return {
                items: updatedItems,
                totalAmount: state.totalAmount + action.item.price * action.item.amount
            }
        }
        case 'REMOVE_ITEM': {
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
            const existingCartItem = state.items[existingCartItemIndex]
            const updatedTotalAmount = state.totalAmount - existingCartItem.price

            let updatedItems

            if (existingCartItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.id)
            } else {
                const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
            }

            return {
                items: updatedItems,
                totalAmount: updatedItems.length > 0 ? updatedTotalAmount : 0
            }
        }
        default: {
            return state
        }
    }
}

export default cartReducer