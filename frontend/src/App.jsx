import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Biens from './pages/Biens'
import Locataires from './pages/Locataires'
import Paiements from './pages/Paiements'
import Maintenance from './pages/Maintenance'
import Reporting from './pages/Reporting'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Biens />} />
        <Route path="/locataires" element={<Locataires />} />
        <Route path="/paiements" element={<Paiements />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/reporting" element={<Reporting />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


