
import React from 'react';
import './App.css';
import EnquiryForm from './Components/EnquiryForm';

function App() {
  return (
    <div className='App'>
      <header>
        Header
      </header>
      <body>
        Simple Form Example body
        <div className='container' >
          Container
          <EnquiryForm />
        </div>
      </body>
    </div>
  );
}

export default App;
