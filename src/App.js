// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert'; 
import TextForm from './components/TextForm';
import React, {useState} from 'react'; 

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
      document.getElementsByTagName('textarea')[0].style.backgroundColor = "#212529"
      document.getElementsByTagName('textarea')[0].style.color = "white" 
      showAlert("Dark mode enabled", "success")
      document.title = 'TextUtils - Dark Mode'
    } else {
      setMode('light'); 
      document.body.style.backgroundColor = "white"; 
      document.body.style.color = "black"; 
      document.getElementsByTagName('textarea')[0].style.backgroundColor = "white"
      document.getElementsByTagName('textarea')[0].style.color = "black"
      showAlert("Light mode enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
		<Navbar title="TextUtils" mode={mode} switchMode={switchMode} />
		<div className='container mt-3'>
      <Alert alert={alert}/>
		  <TextForm showAlert={showAlert} />
      {/* <About /> */}
		</div>
    </>
  );
}

export default App;
