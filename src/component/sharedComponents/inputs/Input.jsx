import React from 'react'

const Input = ({ containerDirection, justifyContent, alignItems, gap, width, height, type, backgroundColor, color, fontSize, mainText, border, borderRadius, padding, inputMargin, name, id, value, placeholder, }) => {
  return <>

    <div style={{
      display: "flex",
      flexDirection: containerDirection,
      justifyContent: justifyContent, alignItems: alignItems, gap: gap
    }}>

      <label htmlFor={name} id={id} >{name}</label>
      <input type name={name} id={id} value={value}
        placeholder={placeholder}
        style={{
          width, height,
          backgroundColor: "#f8f9fa", color: "#fff",
          fontSize: "18px", border: "1px solid #111",
          borderRadius: "8px", padding: "8px", margin: inputMargin

        }}>

        {mainText}
      </input>
    </div>

  </>
}

export default Input