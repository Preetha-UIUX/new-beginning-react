import React from 'react'
import Card from './shared/Card'
import { FaRegEdit } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";

const FeedbackItem = ({ item, handleDelete, editFeedback }) => {
    console.log('FeedbackItem', item);
    
    return (
        <Card>
            <div className='card-wrapper'>
                <h4>{item.text}</h4>

                <div>
                    <div className='edit'>
                        <FaRegEdit onClick={() => {
                            console.log("Editing item:", item); 
                            editFeedback({item, edit: true})
                            }}
                        />
                    </div>

                    <div className='delete'>
                        <IoMdTrash onClick={() => handleDelete(item.id)}/>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default FeedbackItem
