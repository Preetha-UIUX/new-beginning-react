import React, { useContext, useEffect, useState } from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'
import FeedbackContext from '../context/FeedbackContext'
import ThemeContext from '../context/ThemeContext'

const FeedbackForm = () => {

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    const {theme} = useContext(ThemeContext)

    const [text, setText] = useState("");
    const [message, setMessage] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const themeStyles = {
        card: {
            backgroundColor: theme === 'Light' ? '#fff' : '#333',
            color: theme === 'Light' ? '#333' : '#fff'
        },
        button: {
            backgroundColor: theme === 'Light' ? 'grey' : '#ccc',
            color: theme === 'Light' ? '#fff' : '#000',
        },
        input: {
            borderColor: theme === 'Light' ? '#ccc' : '#fff',
            color: theme === 'Light' ? '#333' : '#fff',
            backgroundColor: theme === 'Light' ? '#fff' : '#444'
        }
    };

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setText(feedbackEdit.item.text);
            setDisabled(false)
        }
    }, [feedbackEdit])

    const handleInputChange = (e) => {
        const trimmedText = e.target.value.trimStart();

        let textError = null

        if(trimmedText.length < 10) {
            textError = 'The Review must be atleast 10 Char long';
            setDisabled(true);
            setMessage(textError)
        } else {
            setDisabled(false);
            setMessage('');
            textError = '';
        }

        setText(trimmedText)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Send btn');
        
        if(text.trim().length > 10) {
            const newFeedback = {
                text
            }

            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }

            setDisabled(true);
            setText('')
        }
    }


  return (
    <Card style={themeStyles.card}>
        <h3>Add your reviews</h3>
        <form className='input-group' onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter your Review...' value={text} onChange={handleInputChange} style={themeStyles.input}/>
            <Button type="submit" version="primary" isDisabled={disabled} style={themeStyles.button}>Send</Button>
        </form>
        <p className="message">{message && message}</p>
    </Card>
  )
}

export default FeedbackForm
