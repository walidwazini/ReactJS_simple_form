import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import './App.css';


function App() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [userInfo, setUserInfo] = useState()
  const onSubmit = (event) => {
    setUserInfo(event)
    console.log(event)
  }

  return (
    <div className='container'>
      <pre> {JSON.stringify(userInfo, undefined, 2)} </pre>
      <form onSubmit={handleSubmit(onSubmit)} >
        <h1>Registration Form</h1>
        <div className='ui divider' ></div>
        <div className='ui form'>
          <div className='field' >
            <label>Username</label>
            <input type='text' name='username'
              placeholder='Username'
              {...register('username')}
            />
          </div>
          <div className='field' >
            <label>Email</label>
            <input type='email' name='email'
              placeholder='Email'
              {...register('email')}
            />
          </div>
          <div className='field' >
            <label>Password</label>
            <input type='password' name='password'
              placeholder='Password'
              {...register('password')}
            />
          </div>
          <button className='fluid ui button blue'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
