import React,{  } from 'react';

const CartItemComponent = ({item:{imageUrl, price, name,quantity}})=>{
    return(
        <div style={{width:'100%', display:'flex', height:80, marginBottom:15 }}>
            <img src={imageUrl} alt='item' style={{width:'30%'}}></img>
            <div style={{width:'70%', display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center', padding:15}}>
                <span style={{fontSize:16}}>{name}</span>
                <span>{quantity} x RM {price}</span>
            </div>
        </div>
    )
}

export default CartItemComponent;