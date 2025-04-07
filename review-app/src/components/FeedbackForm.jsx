import React, { useEffect, useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

const FeedbackForm = ({ handleAdd, feedbackEdit, updateFeedback }) => {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, setIsDisabled] = useState(true)


  // useEffect to set the text when the feedbackEdit is true
  useEffect(() => {
    if(feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text)
      setIsDisabled(false)
    }
  }, [feedbackEdit])

  // Input Change handler
  const handleInputChange = (e) => {
    const trimmedText = e.target.value.trimStart();

    let textError = null;

    if(trimmedText.length < 10) {
      textError = "The Review must be atleast 10 Char long";
      setIsDisabled(true)
      setMessage(textError)
    } else {
      setIsDisabled(false)
      setMessage('')
      textError = null
    }
    setText(trimmedText)

  }

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted', text);

    if(text.trim().length > 10) {
      const newFeedback = {
        text
      }

      if(feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        handleAdd(newFeedback)
      }

      setText('')
      setIsDisabled(true)
    }
    
  }
 

  return (
    <Card>
        <h3>Add your reviews</h3>
        <form className='input-group' onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter your Review' value={text} onChange={handleInputChange}/>
            <Button type='submit' version="primary" isDisabled={disabled}>
              Send
            </Button>
        </form>
        <p className="message">{message && message}</p>
    </Card>
  )
}

export default FeedbackForm
