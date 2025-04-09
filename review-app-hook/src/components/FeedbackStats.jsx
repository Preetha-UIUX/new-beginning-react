import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {

    const { feedback } = useContext(FeedbackContext)

  return (
    <div>
      <h4 className='mb'>Total Item(s):  {feedback.length}</h4>
    </div>
  )
}

export default FeedbackStats
