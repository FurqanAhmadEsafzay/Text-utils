
import './App.css';
import Nav from './components/Nav';
import TextForm from './components/TextForm';
import About from './components/About';
import { useCallback, useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

const showAlert = (message,type) =>{
  setAlert({
    msg:message,
    typ:type
  })
  setTimeout(()=>{
    setAlert(null);
  },1000)
} 

  const toggleMode = () =>{
    if(mode===('light')){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled","Success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled","success")
    }
    
  }

  
  return (
  <>
  <Router>
 
  <Nav title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div className="container my-3">
   <Routes>
          <Route path="/about" element= {<About />}></Route>
         
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}  />}>
          </Route>
          </Routes>  
  </div>
  
  </Router>
  
  </>
  );
}

export default App;
