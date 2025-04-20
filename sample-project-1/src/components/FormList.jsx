import React from 'react'
import { MdDelete } from "react-icons/md";

const FormList = ({userList, handleDelete}) => {
    console.log(userList);
    
  return (
    <div className="mt-6">
      {userList.map((item, index) => (
        <div
        key={index}
        className="flex justify-between items-center p-3 my-2 bg-gray-100 rounded-md"
      >
        {item.name} - {item.gender}
        <button onClick={() => handleDelete(index)}><MdDelete /></button>
      </div>
      ))}
    </div>
  )
}

export default FormList
