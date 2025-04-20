import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AutoSavingForm from './components/AutoSavingForm'

function App() {
 return (
  <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
          {/* useState + useEffect: Auto-saving Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">1. Auto-saving Form (useState + useEffect)</h2>
            <AutoSavingForm />
          </div>
      </div>
  </div>
 )
}

export default App
