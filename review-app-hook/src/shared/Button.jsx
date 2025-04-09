import React from 'react'

const Button = ({children, type, version, isDisabled, style, onClick}) => {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled} style={style} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
