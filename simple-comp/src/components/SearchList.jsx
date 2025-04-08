import React, { useState } from 'react'

const SearchList = ({items, icon}) => {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredItems = items.filter((item) => {
        const matchedSearch = item.name.toLowerCase().includes(search.toLowerCase());
        const matchedCategory = selectedCategory === 'All' || item.category === selectedCategory;
        return matchedSearch && matchedCategory
    }
    )

    const categories = ['All', ...new Set(items.map((item) => item.category))];


    console.log('filteredItems', filteredItems);
    console.log('items', items);
    console.log('categories', categories);
    
    

    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <div className="flex-1 relative">
                    <input 
                        type='text' 
                        placeholder='Search Items...' 
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <span className="absolute left-3 top-2.5 text-gray-400">
                        {icon}
                    </span>
                </div>
                <select
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <ul className="space-y-2">
                {filteredItems.map((item) => (
                    <li 
                        key={item.id}
                        className="p-3 bg-gray-50 rounded-lg flex justify-between items-center"
                    >
                        <span>{item.name}</span>
                        <span className="text-sm text-gray-500">{item.category}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchList
