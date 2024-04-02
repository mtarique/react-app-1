// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert'; 
import TextForm from './components/TextForm';
import React, {useState} from 'react'; 
import {
  BrowserRouter,  
  Route, 
  Routes
} from 'react-router-dom'

// let name = "Tarique"; 
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({
      message: msg, 
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  
  const switchMode = () => {
    if(mode === 'light') {
      setMode('dark'); 
      document.body.style.backgroundColor = "black"; 
      document.body.style.color = "white"; 
      if(document.getElementsByTagName('textarea').length > 0) {
        document.getElementsByTagName('textarea')[0].style.backgroundColor = "#212529"
        document.getElementsByTagName('textarea')[0].style.color = "white" 
      }
      showAlert("Dark mode enabled", "success")
      // document.title = 'TextUtils - Dark Mode'
    } else {
      setMode('light'); 
      document.body.style.backgroundColor = "white"; 
      document.body.style.color = "black"; 
      if(document.getElementsByTagName('textarea').length > 0) {
        document.getElementsByTagName('textarea')[0].style.backgroundColor = "white"
        document.getElementsByTagName('textarea')[0].style.color = "black"
      }
      showAlert("Light mode enabled", "success")
      // document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} switchMode={switchMode} />
      <div className='container mt-3'>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} />}></Route>
          <Route exact path="/about" element={<About mode={mode} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
