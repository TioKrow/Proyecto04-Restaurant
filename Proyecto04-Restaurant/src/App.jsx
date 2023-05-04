import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import NavBarProyect from './Components/NavBar.jsx';
import Qsomos from './Components/SobreNosotros.jsx';
import Carta from './Components/Carta.jsx';
import Reservas from './Components/Reservas.jsx'
import TconNosotros from './Components/TconNosotros.jsx'
import './Components/css/App.css'


function App() {
  return (
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarProyect />}>
            <Route index element={<Qsomos/>} />
            <Route path="/" element={<Qsomos/>} />
            <Route path="/Carta" element={<Carta/>} />
            <Route path="/Reservas" element={<Reservas/>} />
            <Route path="/TconNosotros" element={<TconNosotros />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
