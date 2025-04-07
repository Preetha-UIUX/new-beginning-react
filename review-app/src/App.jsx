
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App() {

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

  const [feedback, setFeedback] = useState(initialState);
  const [feedbackEdit, setFeedbackEdit] = useState({
    ietm: {},
    edit: false
  })

  // Add feedback function, set ID and the text will be passed from the FeedbackFrom.

  const addFeedback = (newFeedback) => {
    newFeedback.id = Date.now();
    setFeedback([...feedback, newFeedback])
  }

  // Delete Feedback function
  const deleteFeedback = (id) => {
    const deletedFeedback = feedback.filter((item) => item.id !== id);
    setFeedback(deletedFeedback)
  }

  const updateFeedback = (id, updateItem) => {
    const updatedFeedback = feedback.map((item) => 
      item.id === id ? {...item, ...updateItem} : item
    )
    setFeedback(updatedFeedback)
  }

  

  return (
    <>
      <Header text="Review App" bgColor="teal" color="white"/>
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} feedbackEdit={feedbackEdit} updateFeedback={updateFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} editFeedback={setFeedbackEdit}/>
      </div>
    </>
  )
}

export default App
