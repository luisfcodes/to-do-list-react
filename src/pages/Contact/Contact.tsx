import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import InputMask from 'react-input-mask'
import './style.scss'

export function Contact(){

  return (
    <div className="container">
      <Header />
      <main className='main-form'>
          <form className='form-content'>
            <h2>Entre em contato</h2>
            <label htmlFor="input-name">Nome</label>
            <input type="text" id='input-name' />
            <label htmlFor="input-email">E-mail</label>
            <input type="email" id='input-email' />
            <label htmlFor="input-phone">Telefone</label>
            <InputMask mask="(99) 9 9999-9999" placeholder='(XX) X XXXX-XXXX' id='input-phone' type="tel"/>
            <label htmlFor="input-text">Insira sua mensagem</label>
            <textarea name="input-text" id="input-text" cols={30} rows={10}></textarea>
            <button type="submit" onClick={e => e.preventDefault()}>Enviar</button>
          </form>
      </main>
      <Footer />
    </div>
  )
}