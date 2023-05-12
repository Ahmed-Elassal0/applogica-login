import classNames from 'classnames'
import React from 'react'
import "./Label.css"
export default function Label({ dark, mainText, ...rest }) {
    const labelClasses = classNames("login-label", { "login-label-dark": dark })

    return (
        <label className={labelClasses} >{mainText}</label>
        
    )
}
