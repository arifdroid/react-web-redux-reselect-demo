import { Button } from '@material-ui/core';
import React,{  } from 'react';
import { connect } from 'react-redux';
import CartItemComponent from '../cart-item-component/cartItemComponent';

const CartDropdown = (props)=>{

    const { thisCart} = props;

    return(
        <div style={{position:'absolute', width:240, height:270 , display:'flex', flexDirection:'column', padding:20, borderColor:'black', borderWidth:1,borderStyle:'groove', backgroundColor:'white', top:90, right:13, zIndex:5}}>
            <div style={{height:240, display:'flex', flexDirection:'column', overflowY:'scroll' }}>
            {thisCart?.map(cartItem=><CartItemComponent key={cartItem.id} item={cartItem}></CartItemComponent>)}
            </div>
            <Button variant="contained" color="secondary" >CHECKOUT</Button>
        </div>
    )
}

const mapStateToProps = ({cart:{cartItems}})=>({
    thisCart : cartItems
})

export default connect(mapStateToProps)(CartDropdown);