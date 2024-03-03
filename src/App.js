import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=> {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode=()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <BrowserRouter>
    <Navbar title="TextUtils" home="Home" about="About Us" mode={mode} toggleMode ={toggleMode}/>
    <Alert alert={alert}/>
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
        <Route exact path="/" element={<div className="container"><TextForm heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert}/></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
