import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import './style.scss'
import { Link } from "react-router-dom";

export function Header(){

  function toogleMenu(event: React.MouseEvent){
    const nav = document.getElementById('nav')
    nav?.classList.toggle('active')
    const active = String(nav?.classList.contains('active'))
    event.currentTarget.setAttribute('aria-expanded', active)
    if(active === 'true') {
      event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
  }


  return (
    <header className='header'>
      <Link to="/">
        <img src={logo} alt="Logo" />
        <span>To-Do List</span>
      </Link>
      <nav id='nav'>
        <button className='btn-mobile' onClick={e => toogleMenu(e)} aria-label="Abrir menu" aria-controls="menu" aria-haspopup="true" aria-expanded="false"><img src={menu} alt="Ícone menu"/></button>
        <ul id='menu' role="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Recursos</Link></li>
          <li><Link to="/pricing">Planos</Link></li>
          <li><a href="#">Sobre</a></li>
        </ul>
      </nav>
    </header>
  )
}