import React from 'react'

const FeedbackStats = ({feedback}) => {

    if(feedback.length === 0) {
        return <h4 className='mb'>No Items in the List. Add Now!!!</h4>
    }

  return (
    <h4 className='mb'>Total Item(s):  {feedback.length}</h4>
  ) 
}

export default FeedbackStats
