// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

// let name = "Tarique"; 
function App() {
  return (
    <>
		<Navbar title="BlogApp" />
		<div className='container'>
		{/* <TextForm /> */}
    <About />
		</div>
    </>
  );
}

export default App;
