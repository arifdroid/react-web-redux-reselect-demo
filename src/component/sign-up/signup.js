import { Button } from "@material-ui/core";
import React, { useState } from "react";
import FormInput from "../form-input/formInput";

const SignUp = (props) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);




    const handleChange = event => {
        const { value, name } = event.target
        if (name === 'email') {
            setEmail(value)
        } else if (name === 'confirmPassword'){
            setConfirmPassword(value)
        }else setPassword(value)
    }


    const handleSubmit = () => {

    }

    return (

        <div style={{ width: '380px', display: 'flex', flexDirection: 'column' }}>

            <h2>Sign Up</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    label='email'
                    value={email}
                    required></FormInput>


                <FormInput
                    name='password'
                    type='password'
                    handleChange={handleChange}
                    label='password'
                    value={password}
                    required></FormInput>

                <FormInput
                    name='password'
                    type='confirmPassword'
                    handleChange={handleChange}
                    label='confirm password'
                    value={confirmPassword}
                    required></FormInput>

                <Button variant="contained" color="secondary" type='submit'>
                    Sign Up
                </Button>



            </form>

        </div>

    )
}


export default SignUp;