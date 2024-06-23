import React, { useState } from 'react';
import './App.css';
import img from './images/logo.PNG';
import axios from 'axios';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://127.0.0.1:8000/predict', { input: prompt });
      setResponse(result.data.response);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('There was an error processing your request.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={img} alt="CIH LOGO" />
        <h1>CIH Chat</h1>
        <h1 className='welcome'>Welcome let's chat</h1>
      </header>
      <div className="container">
        <div className="prompt-section">
          <div className='input-section'>
            <h4>Prompt</h4>
            <form onSubmit={handleSubmit}>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Your input here"
              />
              <div className="buttons">
                <button type="button" onClick={() => setPrompt('')}>Clear</button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="response-section">
          <h4>Response</h4>
          <div className="response">
            <pre>{response}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
