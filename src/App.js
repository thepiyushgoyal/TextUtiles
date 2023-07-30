import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js'
import TextForm from './Components/TextForm.js';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const[alert,setAlert]=useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
  const[Mode, setMode]=useState("light");
  const toggleMode = ()=>{
    if(Mode === "dark"){
      document.body.style.backgroundColor="#fff";
      setMode("light");
      showAlert("Light mode has been enabled", "success")
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="black";
      showAlert("Dark mode has been enabled", "success")
  }
}


  return (
    <>
    <Router>
      <Navbar title = "TextUtils" mode = {Mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
