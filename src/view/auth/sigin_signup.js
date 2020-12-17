import React,{  } from 'react';
import SignIn from '../../component/sign-in/signin';
import SignUp from '../../component/sign-up/signup';

const Signin_Signup = ()=>{

    return(

        <div style={{width:'850px', display:'flex', justifyContent:'space-between', marginLeft:'30px'}}>
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )

}

export default Signin_Signup;