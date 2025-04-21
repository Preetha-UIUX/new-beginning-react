import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

const initialState = []

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState(initialState);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    console.log(feedback);

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch Feedback
    const fetchFeedback = async() => {
        const response = await fetch('http://localhost:3000/posts')
        const data = await response.json()
        console.log('fetchedData:', data);
        setFeedback(data)
        
    }

    const addFeedback = async(newFeedback) => {
        const response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json()

        setFeedback([...feedback, data])
    }

    const deleteFeedback = async(id) => {
        if(window.confirm("Are you sure?")) {
            const response = await fetch(`http://localhost:3000/posts/${id}`, {
                method: 'DELETE'
            })
        }
        const deletedFeedback = feedback.filter((item) => 
            item.id !== id
        )
        setFeedback(deletedFeedback)
    }

    const updateFeedback = async(id, updateItem) => {
        console.log('updateItem', updateItem);

        const response = await fetch(`http://localhost:3000/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })

        const data = await response.json()
        
        const updatedFeedback = feedback.map((item) => 
            item.id === id ? {...item, ...data} : item
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