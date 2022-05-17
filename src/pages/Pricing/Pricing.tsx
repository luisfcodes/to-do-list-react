import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import './style.scss'

export function Pricing(){
  return(
    <div className="container">
      <Header />
      <main className='pricing-main'>
        <h1>Escolha o plano ideal para otimizar sua rotina</h1>
        <p>Gerencie todas as suas atividades de forma eficiente, obtenha relatórios que serão fundamentais para acompanhar seu desenvolvimento.</p>
        <section className='pricing-list'>
          <div className='pricing-card pricing-card-one'>
            <h2>Estudante</h2>
            <ul>
              <li className='pricing-card-check'><span>&#10003;</span> <span>40MB de uploads mensais</span></li>
              <li className='pricing-card-check'><span>&#10003;</span> <span>Acesso em até 2 dispositivos</span></li>
              <li className='pricing-card-check'><span>&#10003;</span> <span>Relatórios mensais</span></li>
              <li className='pricing-card-denied'><span>&#10006;</span> <span>Relatórios semanais e diários</span> </li>
              <li className='pricing-card-denied'><span>&#10006;</span> <span>Organizador de tarefas</span> </li>
              <li className='pricing-card-denied'><span>&#10006;</span> <span>Crie modelos personalizados</span> </li>
            </ul>
            <button className='pricing-card-button pricing-card-button-free'>Free</button>
          </div>
          <div className='pricing-card pricing-card-two'>
            <h2>Profissional</h2>
            <ul>
              <li className='pricing-card-check'><span>&#10003;</span> <span>20GB de uploads mensais</span></li>
              <li className='pricing-card-check'><span>&#10003;</span> <span>Acesso em diversos dispositivos</span></li>
              <li className='pricing-card-check'><span>&#10003;</span> <span>Relatórios mensais</span></li>
              <li className='pricing-card-check'><span>&#10003;</span> <span>Relatórios semanais e diários</span></li>
              <li className='pricing-card-check'><span>&#10003;</span> <span>Organizador de tarefas</span></li>
              <li className='pricing-card-check'><span>&#10003;</span> <span>Crie modelos personalizados</span></li>
            </ul>
            <button className='pricing-card-button pricing-card-button-professional'>R$39,99</button>
          </div>
          <div className='pricing-card pricing-card-three'>
            <h2>Pessoal</h2>
            <ul>
              <li className='pricing-card-check'><span>&#10003;</span> <span>5GB de uploads mensais</span></li>
              <li className='pricing-card-check'><span>&#10003;</span> <span>Acesso em diversos dispositivos</span></li>
              <li className='pricing-card-check'><span>&#10003;</span> <span>Relatórios mensais</span></li>
              <li className='pricing-card-check'><span>&#10003;</span> <span>Relatórios semanais e diários</span></li>
              <li className='pricing-card-denied'><span>&#10006;</span> <span>Organizador de tarefas</span> </li>
              <li className='pricing-card-denied'><span>&#10006;</span> <span>Crie modelos personalizados</span> </li>
            </ul>
            <button className='pricing-card-button'>R$19,99</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}