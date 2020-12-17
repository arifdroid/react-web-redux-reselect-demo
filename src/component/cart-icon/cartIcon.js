import React,{  } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/action/cart/cart.action';

import { selectCartItemsCount } from "../../redux/selector/cart/index";

const CartIcon = (props)=>{

    const {toggleCart, itemCount} =props;

    const checkbutton = (item)=>{
        console.log('check button')
        toggleCart()
    }

    return(
        <div style={{justifyContent:'center',  outlineStyle:'groove',outline:1, outlineColor:'black', width:50, marginRight:20,  display:'flex'}} 
        onClick={checkbutton}
        >
            {/* <Cart */}
            <ShoppingCartIcon/>
            <span style={{alignSelf:'center', }}>{itemCount}</span>

        </div>
    )
}

const mapDispatchToProps=dispatch =>({
    toggleCart : ()=> dispatch(toggleCartHidden())
})

const mapStateToProps=state=>({
    itemCount:selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);