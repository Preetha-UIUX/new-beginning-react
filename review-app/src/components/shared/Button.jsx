import React from 'react'

const Button = ({children, type, version, isDisabled}) => {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
        {children}
    </button>
  )
}

export default Button
