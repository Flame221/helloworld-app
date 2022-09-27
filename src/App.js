import { Heading } from '@chakra-ui/react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
