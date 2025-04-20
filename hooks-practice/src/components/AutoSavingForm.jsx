import React, { useState } from 'react'

const AutoSavingForm = () => {

    const [formData, setFormData] = useState({
        title: '',
        content: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData((prevData) => {
            
        })
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <input
                    type="text"
                    name='title'
                    placeholder="Enter title..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <textarea
                name='content'
                placeholder='Enter Content...'
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                value={formData.content}
                onChange={handleChange}
            />
        </div>
    )
}

export default AutoSavingForm
