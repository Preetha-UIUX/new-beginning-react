import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {
  const users = useSelector((state) => state.usersInfo.users);
  console.log(users);
  
  return (
    <div>
      {users.map((user,index) => {
        return (
          <div key={index}>
              <h2>{user.name}</h2>
              <h2>{user.email}</h2>
              <h2>{user.age}</h2>
              <h2>{user.contact}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default Users
