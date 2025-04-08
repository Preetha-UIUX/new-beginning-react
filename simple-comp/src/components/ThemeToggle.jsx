import React, { useState } from 'react'
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    return (
      <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <button
          onClick={() => setIsDark(!isDark)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg
            ${isDark 
              ? 'bg-gray-700 text-white hover:bg-gray-600' 
              : 'bg-white text-gray-800 hover:bg-gray-50 shadow-sm'
            }
          `}
        >
          {isDark ? (
            <>
              <Sun className="w-4 h-4" />
              Light Mode
            </>
          ) : (
            <>
              <Moon className="w-4 h-4" />
              Dark Mode
            </>
          )}
        </button>
        <p className={`mt-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Current theme: {isDark ? 'Dark' : 'Light'}
        </p>
      </div>
    );
}

export default ThemeToggle
