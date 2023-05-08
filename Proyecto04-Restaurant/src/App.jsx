import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import NavBarProyect from './Components/NavBar.jsx';
import SobreNosotros from './Components/SobreNosotros.jsx';
import Carta from './Components/Carta.jsx';
import Reservas from './Components/Reservas.jsx'
import Footer from './Components/Footer.jsx';
import './Components/css/App.css'


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavBarProyect />}>
              <Route index element={<SobreNosotros />} />
              <Route path="/" element={<SobreNosotros />} />
              <Route path="/Carta" element={<Carta />} />
              <Route path="/Reservas" element={<Reservas />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </>
  )
}

export default App
