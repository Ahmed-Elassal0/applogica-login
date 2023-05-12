import React, { useState } from 'react'
import "./Login.css"
import InputsContainer from '../../component/sharedComponents/inputsContainer/InputsContainer'
import Buttons from '../../component/sharedComponents/Buttons/Buttons'
import eyeIcon from "../../assets/img/eye.png"

export default function Login() {
    const [dark, setDark] = useState("dark")
    const [toggelePassword, setToggelePassword] = useState(false)

    return <>
        <div className='login-page'>
            <h1 className='login-applogica'>applogica</h1>
            <div className='login-container'>
                <div className='login-welcoming'>
                    <h5>Welcome Back</h5>
                    <h2>Let's Sign in</h2>
                </div>
                <InputsContainer mainText={"select company"} placeholder={"eg: Applogica"} id={"company_name"} type={"text"} />
                <InputsContainer mainText={"email address"} placeholder={"eg: mail@saeed.engineer"} id={"email"} type={"email"} />
                <div className='login-password-container'>
                    <InputsContainer mainText={"password"} placeholder={"enter your password"} id={"password"}
                        toggelePassword={toggelePassword} setToggelePassword={setToggelePassword} type={toggelePassword ? "text" : "password"} icons={eyeIcon}
                        iconId={"eyeIcon"} />
                    <div className='forget-password-container'>
                        <a className='forget-password' href='./forgetpassword'>forget password ?</a>
                    </div>
                </div>
                <div className='login-signup-container'>
                    <Buttons mainText={"sign in"} type={"submit"} />
                    <h4 className='login-account-check'>don't have account?<a href='./signup'>sign up</a></h4>
                </div>
            </div>
        </div>
    </>

}
