import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUsers } from '../slice/UserSlice'

const Home = () => {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    contact: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setFormData((currInput) => {
      return {
        ...currInput,
        [name] : value
      }
    })
  }

  console.log('formData',formData);

  const addUser = (e) => {
    e.preventDefault()
    dispatch(setUsers(formData))
  }
  
  return (
    <div>
      <form>
        <label>Name</label>
        <br/>
        <input name="name" type='text' value={formData.name} onChange={handleInputChange}/>
        <br/>
        <label>Email</label>
        <br/>
        <input name="email" type='text' value={formData.email} onChange={handleInputChange}/>
        <br/>
        <label>Age</label>
        <br/>
        <input name='age' type='number' value={formData.age} onChange={handleInputChange}/>
        <br/>
        <label>Contact</label>
        <br/>
        <input name='contact' type='number' value={formData.contact} onChange={handleInputChange}/>
      </form>

      <button type='submit' onClick={addUser}>Add</button>
    </div>
  )
}

export default Home
