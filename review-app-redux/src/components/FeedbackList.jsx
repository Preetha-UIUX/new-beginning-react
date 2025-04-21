import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {

    const {feedback} = useContext(FeedbackContext);

    console.log('Feedback context', feedback);
    
  return (
    <>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item}/>
        ))}
    </>
  )
}

export default FeedbackList
