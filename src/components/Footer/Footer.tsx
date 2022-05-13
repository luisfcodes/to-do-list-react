import './style.scss'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import gmail from '../../assets/gmail.svg'
import twitter from '../../assets/twitter.svg'

export function Footer(){
  return (
    <footer>
        <ul className='social-media'>
          <li>
            <a href="https://github.com/luisfcodes" target="_blank">
              <img src={github} alt="Ícone do github" title='Github'/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/luisfcodes/" target="_blank">
              <img src={linkedin} alt="Ícone do linkedin" title='Linkedin'/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/luisfcodes/" target="_blank">
              <img src={instagram} alt="Ícone do instagram" title='Instagram'/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/luisfcodes" target="_blank">
              <img src={twitter} alt="Ícone do twitter" title='Twitter'/>
            </a>
          </li>
          <li>
            <a href="mailto:luis.silva@gmail.com?" target="_blank">
              <img src={gmail} alt="Ícone do gmail" title='Gmail'/>
            </a>
          </li>
        </ul>
      <span>Copyright &copy; 2022-2022 Luis Fernando da Silva - Todos os direitos reservados</span>
    </footer>
  )
}