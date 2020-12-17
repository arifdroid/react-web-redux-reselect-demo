import React,{  } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartDropdown from '../cart-dropdown/cartDropdown';
import CartIcon from '../cart-icon/cartIcon';

//selector 

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from "../../redux/selector/cart";
import { selectCurrentUser } from "../../redux/selector/user";




const Header =(props)=>{
    const {currentUser,isCartHidden} =props;
    // let currentUser = 'arif'

    // console.log('currentuser is ', currentUser)

    return(
        <div style={{height:'70px', width:'100%', display:'flex', justifyContent:'space-between', marginBottom:'25px'}}>
            
            <Link to='/'>Home</Link>
            <div style={{width:'50%', height:"100%", display:'flex', alignItems:'center', justifyContent:'flex-end'}}>

              <Link style={{paddingLeft:'10px', paddingRight:'20px'}} to='/shop'>SHOP</Link>     
              <Link style={{paddingLeft:'10px', paddingRight:'20px'}} to='/shop'>CONTACT</Link>     

              {currentUser? (
                  <div style={{paddingLeft:'10px', paddingRight:'20px'}} onClick={()=>console.log('sign out now')}>

                    SIGN OUT

                  </div>
              ):(
                  <Link style={{paddingLeft:'10px', paddingRight:'20px', cursor:'context-menu'}}>
                      SIGN IN
                  </Link>
              )} 

              <CartIcon></CartIcon>


            </div>
            {isCartHidden?null:<CartDropdown/> }

        </div>
    )

}


//before reselect

// const mapStateToProps = state =>({
//     currentUser:state.user.currentUser,
//     isCartHidden:state.cart.hidden
// })

//after selector v1

// const mapStateToProps = state =>({
//     currentUser:selectCurrentUser(state),
//     isCartHidden:selectCartHidden(state)
// })

//after selector v2

const mapStateToProps=createStructuredSelector({
    currentUser: selectCurrentUser,
    isCartHidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);