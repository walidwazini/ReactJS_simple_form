import React, { useState } from 'react'
import './EnquiryForm.css'

const EnquiryForm = () => {
  const [userInput, setUserInput] = useState({
    enteredName: '',
    enteredCategory: '',
    enteredQuestion: '',
    
  })

  const dropdownChangeHandler = (ev) => {
    console.log(`Event target value ${ev.target.value}`)
    setUserInput((prevState) => {
      return { ...prevState, enteredCategory: ev.target.value }
    })
    console.log(`This is ${userInput.enteredCategory}`)
    console.log(userInput)
  }

  const submitHandler = (ev) => {
    ev.preventDefault()

    const enquiryData = {
      name:userInput.enteredName,
      category: userInput.enteredCategory,
      question: userInput.enteredQuestion,
    }

    console.log(enquiryData)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form className='form' onSubmit={submitHandler}>
        This
        <div className='input__field'>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={userInput.enteredName}
          />
        </div>
        <div className='categories_field'>
          <label>Categories</label>
          <select value={userInput.enteredCategory} onChange={dropdownChangeHandler} >
            <option value='price' >Price</option>
            <option value='location' >Location</option>
            <option value='service' >Service</option>
          </select>
        </div>
        <div className='input__field' >
          <label>Question</label>
          <textarea
            type="text"
            name="question"
            placeholder="Your question.."
            value={userInput.enteredQuestion}
          />
        </div>
        <button type='submit'>Test</button>
      </form>
    </div>
  )
}

export default EnquiryForm
