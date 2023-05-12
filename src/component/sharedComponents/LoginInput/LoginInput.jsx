import classNames from 'classnames'
import React from 'react'
import "./LoginInput.css"
import Icons from '../icons/Icons'
const LoginInput = ({ dark, icons, iconActions, iconId, toggelePassword, setToggelePassword, ...rest }) => {
    const inputClasses = classNames("login-input", { "login-input-dark": dark })

    function ShowPassword(e) {
        setToggelePassword(!toggelePassword)
    }
    return <>

        <div className=' position-relative w-100'>
            <input className={inputClasses} {...rest} />
            <Icons icons={icons} onClick={ShowPassword} iconId={iconId} />
        </div>
    </>
}

export default LoginInput