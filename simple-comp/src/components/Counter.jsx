import React, { useState } from 'react'

const Counter = ({ initialCount }) => {

    const [count, setCount] = useState(initialCount);

  return (
    <div className="border rounded-lg p-4 text-center">
      <p className="text-2xl font-bold mb-2">{count}</p>
      <div className="flex gap-2">
        <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => setCount(count - 1)}>-</button>
        <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600" onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  )
}

export default Counter
