import React from 'react'

const Header = ({ text, bgColor, color }) => {
    return (
        <header style={{ backgroundColor:  bgColor, color: color}}>
            <div className='container'>
                <h2>{text}</h2>
            </div>
        </header>
    )
}

export default Header;