import './App.css'
import Counter from './components/Counter'
import Greetings from './components/Greetings'
import LikeButton from './components/LikeButton'
import UserCard from './components/UserCard'
import { Heart, Star } from 'lucide-react'

function App() {

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Example 1: Basic Props */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">1. Basic Props Example</h2>
          <Greetings name="John" />
          <Greetings name="Sarah" />
        </div>

        {/* Example 2: Multiple Props */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">2. Multiple Props Example</h2>
          <UserCard name="John" email="john@gmail.com" role="Developer" />
        </div>

        {/* Example 3: State and Props */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">3. State with Props Example</h2>
          <div className="flex gap-4">
            <Counter initialCount={0} />
            <Counter initialCount={5} />
          </div>
        </div>

        {/* Example 4: Props with Events */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">4. Props with Events Example</h2>
          <div className="flex gap-4">
            <LikeButton icon={<Heart className='w-5 h-5'/>} name="Like"/>
            <LikeButton icon={<Star className='w-5 h-5'/>} name="Favorite"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
