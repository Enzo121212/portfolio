import logo from './logo.svg';
import './App.css';
import { Link, Route ,Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>

        <Link to="/home"> Home</Link>
        <Link to="/product"> product</Link>
        <Link to="/about"> about</Link>
    </>
  );
}

const Home = ()=>{
  return(
      <>
          <div> home </div>
      </>
  );
}

const Product = ()=>{
  return(
      <>
          <div> product </div>
      </>
  );
}

const About = ()=>{
  return(
      <>
          <div> about </div>
      </>
  );
}

export default App;
