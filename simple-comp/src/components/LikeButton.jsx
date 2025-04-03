import React, { useState } from 'react'

const LikeButton = ({ icon, name }) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors 
            ${isActive ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
        `}
            onClick={() => setIsActive(!isActive)}
        >
            {icon}
            {name}
        </button>
    )
}

export default LikeButton
