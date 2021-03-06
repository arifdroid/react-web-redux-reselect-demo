import { createSelector } from 'reselect';

const selectCart = state => state.cart;

// const selectUser = state => state.user;
export const selectCartHidden = createSelector(
    [selectCart],
    (cart)=>cart.hidden
);

export const selectCartItems = createSelector(
    // [selectCart, selectUser],
    // (cart,user)=>
    [selectCart],
    (cart)=>cart.cartItems

);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems)=> cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity+ cartItem.quantity, 0
    )
    )