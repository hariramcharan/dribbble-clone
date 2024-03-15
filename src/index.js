import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import './index.css'
import Header from './Header'
import Footer from './Footer';
import Body from './Body'
 const AppLayout=()=>{
  return (
    <div className="app">
    <Header/>
    <Body/>
    <Footer/>
    </div>
  )
 }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AppLayout/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
