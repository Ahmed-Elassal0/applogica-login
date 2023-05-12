import React from 'react'
import "./Buttons.css"
import classNames from 'classnames'

export default function Buttons({dark, mainText, children, ...rest }) {
    const iconClasses = classNames("login-button", { "login-button-dark": dark })

    return (
        <button className={iconClasses} {...rest}>{mainText}</button>
    )
}
