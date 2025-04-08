import React, { useState } from 'react'

const NotificationBadge = ({ icon, count }) => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
        <button 
            className="relative p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
        >
            {icon}
            {count > 0 && 
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {count}
                </span>
            }
        </button>

        {isOpen && 
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border p-2">
            <div className="text-sm text-gray-700">
                You have {count} new notifications
            </div>
            </div>
        }
    </div>
  )
}

export default NotificationBadge
