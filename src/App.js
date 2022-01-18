import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import './App.css';


function App() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [userInfo, setUserInfo] = useState()
  const onSubmit = (event) => {
    setUserInfo(event)
    console.log(event)
    // console.log(this.formState.errors)
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
              {...register('username', { required: true })}
            />
            {errors.username?.type === 'required' && <p>Username is required</p>}

          </div>
          <div className='field' >
            <label>Email</label>
            <input type='email' name='email'
              placeholder='Email'
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email?.type === 'required' && <p>Username is required</p>}
          </div>
          <div className='field' >
            <label>Password</label>
            <input type='password' name='password'
              placeholder='Password'
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password?.type === 'required' && <p>Username is required</p>}
          </div>
          <button className='fluid ui button blue'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
