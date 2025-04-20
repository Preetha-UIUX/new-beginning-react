import React, { useState } from 'react'
import FormList from './FormList';

const UserForm = () => {
    const [formData, setFormData] = useState({ name: '', gender: '' });
    const [userList, setUserList] = useState([]);

    const handleChange = (e) => {
      const { name , value} = e.target;
      setFormData((currItem) => {
        return {
          ...currItem,
          [name] : value
        }
      })
    }

    const handleDelete = (index) => {
      const updatedList = userList.filter((_, i) => i !== index);
      setUserList(updatedList);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.name && formData.gender) {
        setUserList((prev) => [...prev, formData]);
        setFormData({ name: '', gender: '' }); // Clear form
      }
    };
  
    return (
      <>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your name
          </label>
          <input
            type="text"
            id="name"
             name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
  
        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select your gender
        </label>
        <select
          id="gender"
           name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
  
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                     focus:outline-none focus:ring-blue-300 font-medium 
                     rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <FormList userList={userList} handleDelete={handleDelete}/>
      </>



    )
}

export default UserForm
