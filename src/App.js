import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light') //darkmode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 1500
      );
  }

  const[BtnText, setBtnText] = useState("Dark")

  const toggleMode= ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled.", "Success");
      setBtnText('Light');
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disabled.", "Success");
      setBtnText('Dark');
      
    }
  }

  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} showAlert={showAlert} BtnText={BtnText} />
<Alert alert = {alert} />
<div className="container my-3" >
{/* <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes> */}
<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
{/* <About/> */}
</div>
{/* </Router> */}
    </>
    );
}

export default App;