
import React, { useState, useEffect } from 'react';
import './App.css';
// import EnquiryForm from './Components/EnquiryForm';

function App() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValue] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const condtionOne = Object.keys(formErrors).length === 0 && isSubmit

  const handleChange = ev => {
    // console.log(ev.target)
    const { name, value } = ev.target
    setFormValue({ ...formValues, [name]: value })
    console.log(formValues)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    // Will get errors object from validate()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  useEffect(() => {
    console.log(formErrors)
    // Recevie the object of formError
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  }, [formErrors])

  const validate = (val) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!val.username) {
      errors.username = 'Username is required!'
    }
    if (!val.email) {
      errors.email = 'Email is required'
    } else if (!regex.test(val.email)) {
      errors.email = 'Email is invalid!'
    }
    if (!val.password) {
      errors.password = 'Password is required!'
    } else if (val.password.length < 6) {
      errors.password = 'Password must be at least 6 characters!'
    }
    // This erros will be send into setFormErrors
    return errors
  }

  //  ---------------------------------------------------------

  return (
    <div className='container'>
      {
        Object.keys(formErrors).length === 0 && isSubmit
          ? (<div className='ui floating green message'>
            <p>Sign in succesful!</p>
          </div>)
          : (
            <pre> {JSON.stringify(formValues, undefined, 2)} </pre>
          )
      }
      <form onSubmit={handleSubmit} >
        <h1>Login Form</h1>
        <div className='ui divider' ></div>
        <div className='ui form'>
          <div className='field'>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p className='error-message'>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className='error-message'>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p className='error-message'>{formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
