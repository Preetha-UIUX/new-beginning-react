import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { id } = useParams()
    console.log(id);
  return (
    <div>
      User: {id}
    </div>
  )
}

export default User
