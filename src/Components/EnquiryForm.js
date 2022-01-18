import React, { useState } from 'react'
import './EnquiryForm.css'

const EnquiryForm = () => {
  const [userInput, setUserInput] = useState({
    enteredName: '',
    enteredTopic: '',
    enteredQuestion: ''
  })

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form className='form'>
        This
        <div className='input__field'>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
          />
        </div>
        <div className='categories_field'>
          <label>Categories</label>
          <select>
            <option>Price</option>
            <option>Location</option>
            <option>Service</option>
          </select>
        </div>
        <div className='input__field' >
          <label>Question</label>
          <textarea
            type="text"
            name="question"
            placeholder="Your question.."
          />
        </div>
      </form>
    </div>
  )
}

export default EnquiryForm
