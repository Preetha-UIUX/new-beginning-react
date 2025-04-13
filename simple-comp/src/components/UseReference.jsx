import React, { useRef, useState } from 'react'

const UseReference = () => {
    const [input, setInput] = useState('');
    const inputRef = useRef();
    console.log('inputRef',inputRef);

    const display = () => {
        console.log(inputRef.current.value);
        inputRef.current.focus()
    }
    
  return (
    <div>
      <h1>Input</h1>
      <input 
        ref={inputRef}
        type='text'
        placeholder='Enter Input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>My name is {input}</p>
      <p>My name is {inputRef.current?.value}</p>
      <button onClick={display}>Show Input</button>
    </div>
  )
}

export default UseReference
