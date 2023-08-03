import Dogs from '../../Assets/Dog'
import './style.css'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <div className="header">
      <nav className='container'>
        <Link className='logo' to="/" aria-label="Dogs - Home"><Dogs /></Link>
        <Link className='login' to="/login">Login / Criar</Link>
      </nav>
    </div>
  )
}