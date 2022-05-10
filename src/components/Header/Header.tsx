import logo from '../../assets/logo.svg'
import './style.scss'

export function Header(){
  return (
    <header className='header'>
      <a href="#">
        <img src={logo} alt="Logo" />
        <span>To-Do List</span>
      </a>

      <nav>
        <ul>
          <li>Home</li>
          <li>Serviços</li>
          <li>Planos</li>
          <li>Sobre</li>
        </ul>
      </nav>
    </header>
  )
}