import classNames from 'classnames'
import React from 'react'
import "./Icons.css"
export default function Icons({ dark, icons, type, iconId, ...rest }) {
    const iconClasses = classNames("icons-input", { "icons-input-dark": dark })

    return <>
        {icons ? <span span className={iconClasses} id={iconId} {...rest}> <img src={icons} alt="" /></span> : ""}

    </>
}
