import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const text="ali"

const el=(
    <div>
      <h1 className='ot'>hello world{text}</h1>
      <input type="text" />
      <button >click</button>
    </div>)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
el
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
