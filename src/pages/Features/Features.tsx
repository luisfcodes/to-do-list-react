import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import screenAddTaskDesktop from '../../assets/screenAddTaskDesktop.png';
import screenAddTaskMobile from '../../assets/screenAddTaskMobile.png';
import screenEditTaskDesktop from '../../assets/screenEditTaskDesktop.png';
import screenEditTaskMobile from '../../assets/screenEditTaskMobile.png';

import './style.scss'

export function Features() {
  return (
    <div className="container">
      <Header />
      <main>
        <section className="block block-one">
          <img src={window.innerWidth > 768 ? screenAddTaskDesktop : screenAddTaskMobile} alt="Foto da tela de adicionar tarefa" />
          <div className="block-text">
            <h2>Adicione tarefas de forma simples e rápida</h2>
            <p>O To-do list permite que você controle todas as suas atividades em um só lugar.</p>
            <p>Não há necessidade de realizar cadastro, basta inserir o nome da tarefa e adicionar a listagem.</p>
            <p>Ao concluir determinada demanda, basta marcar a caixa localizada à esquerda do título. Automaticamente o sistema irá alterar a estilização para auxiliar na visualização.</p>
            <p>Qualquer tarefa poderá ser excluída clicando na lixeira localizada ao lado direito de cada item.</p>
          </div>
        </section>
        <section className="block block-two">
          <img src={window.innerWidth > 768 ? screenEditTaskDesktop : screenEditTaskMobile} alt="Foto da tela de edição" />
          <div className="block-text block-two-text">
            <h2>Altere o título da atividade com poucos cliques</h2>
            <p>Acabou não gostando do título escolhido? Não tem problema, a ferramenta permite que o nome seja alterado a qualquer momento.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>

  )
}