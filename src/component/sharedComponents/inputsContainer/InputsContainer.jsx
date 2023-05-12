import React from 'react'
import Label from '../label/Label'
import LoginInput from '../LoginInput/LoginInput'
import "./InputsContainer.css"
const InputsContainer = ({ mainText, icons, iconActions, ...rest }) => {

    return <>
        <div className='inputs-container'>
            <Label {...rest} mainText={mainText} />
            <LoginInput {...rest} icons={icons} iconActions={iconActions} />

        </div>


    </>
}

export default InputsContainer