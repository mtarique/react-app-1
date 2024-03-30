// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'; 

// let name = "Tarique"; 
function App() {
  const [mode, setMode] = useState('light');
  
  const switchMode = () => {
    if(mode === 'light') {
      setMode('dark'); 
      document.body.style.backgroundColor = "black"; 
      document.body.style.color = "white"; 
      document.getElementsByTagName('textarea')[0].style.backgroundColor = "#212529"
      document.getElementsByTagName('textarea')[0].style.color = "white"
    } else {
      setMode('light'); 
      document.body.style.backgroundColor = "white"; 
      document.body.style.color = "black"; 
      document.getElementsByTagName('textarea')[0].style.backgroundColor = "white"
      document.getElementsByTagName('textarea')[0].style.color = "black"
    }
  }

  return (
    <>
		<Navbar title="BlogApp" mode={mode} switchMode={switchMode} />
		<div className='container'>
		<TextForm />
    {/* <About /> */}
		</div>
    </>
  );
}

export default App;
