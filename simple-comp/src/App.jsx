import { createContext, useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Greetings from './components/Greetings'
import LikeButton from './components/LikeButton'
import NotificationBadge from './components/NotificationBadge'
import SearchList from './components/SearchList'
import ThemeToggle from './components/ThemeToggle'
import TodoList from './components/TodoList'
import UserCard from './components/UserCard'
import { Heart, Star, Search, ShoppingCart } from 'lucide-react'
import UseReference from './components/UseReference'
import UseMemoHook from './components/UseMemoHook'

export const ThemeContext = createContext();

function App() {

  const [isDark, setIsDark] = useState(false);

  const items = [
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Banana', category: 'Fruit' },
    { id: 3, name: 'Carrot', category: 'Vegetable' },
    { id: 4, name: 'Broccoli', category: 'Vegetable' },
  ]

  return (
    <ThemeContext.Provider value={{
      isDark,
      setIsDark
    }}>
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

        {/* Example 5: Todo List with CRUD Operations */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">5. Todo List (CRUD Operations)</h2>
          <TodoList />
        </div>

        {/* Example 6: Searchable List with Filtering */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">6. Searchable List with Filtering</h2>
            <SearchList items={items} icon={<Search className="w-5 h-5" />}/>
        </div>

        {/* Example 7: Notification Badge with Counter */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">7. Notification Badge with Counter</h2>
          <NotificationBadge icon={ <ShoppingCart className="w-6 h-6"/> } count={5}/>
        </div>

        {/* Example 8: Theme Toggle */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">8. Theme Toggle with Context</h2>
          <ThemeToggle />
        </div>

        {/* Example 9: UseRef Hook */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">9. UseRef Hook</h2>
          <UseReference />
        </div>

        {/* Example 10: UseMemo Hook */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">10. UseMemo Hook</h2>
          <UseMemoHook />
        </div>
      </div>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
