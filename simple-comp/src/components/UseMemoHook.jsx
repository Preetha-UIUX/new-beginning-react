import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  }

  // const doubleNumber = slowFunction(number)

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  return (
    <div>
      <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  )
}

export default UseMemoHook;


function slowFunction(num) {
  for(let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
