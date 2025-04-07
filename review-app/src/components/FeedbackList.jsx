import React from 'react'
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback, handleDelete, editFeedback }) => {
    console.log(feedback);

    return (
        <>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} editFeedback={editFeedback}/>
            ))}
        </>
    )
}

export default FeedbackList
