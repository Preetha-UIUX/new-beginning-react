import React from 'react'

const Header = ({ text, bgColor, color }) => {
    return (
        <header style={{ backgroundColor:  bgColor, color: color}}>
            <div className='container'>
                <h1>{text}</h1>
            </div>
        </header>
    )
}

export default Header;