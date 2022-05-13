import './style.scss'
import github from '../../assets/github.svg'

export function Footer(){
  return (
    <footer>
      <div className='social-media'>
        <ul>
          <li>
            <a href="https://github.com/luisfcodes" target="_blank">
              <img src={github} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <span>Copyright &copy; 2022-2022 Luis Fernando da Silva - Todos os direitos reservados</span>
    </footer>
  )
}