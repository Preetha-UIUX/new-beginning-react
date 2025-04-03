import React from 'react'
import { User, Mail } from 'lucide-react';
import Avatar from '../assets/avatar.jpeg'

const UserCard = ({ name, email, role }) => {
    return (
        <div className="flex items-center space-x-4 p-4 border rounded-lg">
            <img src={Avatar} alt={name} className="w-12 h-12 rounded-full" />
            <div>
                <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <h3 className="font-semibold">{name}</h3>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <p>{email}</p>
                </div>
                <p className="text-sm text-gray-500">{role}</p>
            </div>
        </div>
    )
}

export default UserCard
