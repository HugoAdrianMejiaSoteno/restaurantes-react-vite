import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from "./components/Header/Header";
import Homepage from './components/Homepage/Homepage';
import Articulos from './components/Articulos/Articulos';
function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/restaurantes" element={<Articulos/>}/>
    </Routes>
    </>
  )
}

export default App
