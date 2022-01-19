
import React from 'react';
import './App.css';
// import EnquiryForm from './Components/EnquiryForm';

function App() {
  return (
    <div>
      <form>
        <h1>Login Form</h1>
        <div className='ui divider' ></div>
        <div className='ui form'>
          <div className='field'>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
            // value={formValues.username}
            // onChange={handleChange}
            />
          </div>
          {/* <p>{formErrors.username}</p> */}
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
            // value={formValues.email}
            // onChange={handleChange}
            />
          </div>
          {/* <p>{formErrors.email}</p> */}
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
            // value={formValues.password}
            // onChange={handleChange}
            />
          </div>
          {/* <p>{formErrors.password}</p> */}
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
