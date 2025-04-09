import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

const initialState = [
    {
      id:1,
      text: 'This is Sample 1'
    },
    {
      id:2,
      text: 'This is Sample 2'
    },
    {
      id:3,
      text: 'This is Sample 3'
    }
  ]

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState(initialState);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    console.log(feedback);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([...feedback, newFeedback])
    }

    const deleteFeedback = (id) => {
        const deletedFeedback = feedback.filter((item) => 
            item.id !== id
        )
        setFeedback(deletedFeedback)
    }

    const updateFeedback = (id, updateItem) => {
        console.log('updateItem', updateItem);
        
        const updatedFeedback = feedback.map((item) => 
            item.id === id ? {...item, ...updateItem} : item
        )
        setFeedback(updatedFeedback)
    } 
    

    return (
        <FeedbackContext.Provider value={{
            feedback,
            addFeedback,
            deleteFeedback,
            setFeedbackEdit,
            feedbackEdit,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}


export default FeedbackContext