import { Button } from "@material-ui/core";
import React, { useState } from "react";
import FormInput from "../form-input/formInput";

const SignIn = (props) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const handleSubmit = () => {

    }

    const handleChange = event => {
        const { value, name } = event.target
        if (name === 'email') {
            setEmail(value)
        } else setPassword(value)
    }

    return (

        <div style={{ width: '380px', display: 'flex', flexDirection: 'column' }}>

            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

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

                <Button variant="contained" color="secondary">
                    Sign In
                </Button>



            </form>

        </div>

    )
}


export default SignIn;