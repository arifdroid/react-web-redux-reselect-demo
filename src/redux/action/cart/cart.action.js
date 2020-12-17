export const toggleCartHidden = ()=>({
    type:'TOGGLE_HIDDEN_CART',
})

export const addItem = item =>({
    type:'ADD_ITEM',
    payload:item
})