import { addItemToCart } from "./utils";

const initialState={
    hidden:false,
    cartItems:[]
}

const cartReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'TOGGLE_HIDDEN_CART':
            return{
                ...state,
                hidden:!state.hidden

            }
        
        case 'ADD_ITEM':
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
            }   
        
        default:
            return state;            
    }
}

export default cartReducer;