import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Biens</Link>
      <Link to="/locataires">Locataires</Link>
      <Link to="/paiements">Paiements</Link>
      <Link to="/maintenance">Maintenance</Link>
      <Link to="/reporting">Reporting</Link>
    </nav>
  )
}

export default Navbar