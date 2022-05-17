import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import screenAddTask from '../../assets/screenAddTask.png'
import { CgTrash } from "react-icons/cg";
import './style.scss'

export function Features(){
  return (
    <div className="container">
      <Header />
        <section className="block-one">
          <img src={screenAddTask} alt="" />
          <div>
            <h2>Adicione tarefas de forma simples e rápida.</h2>
            <p>O To-do list permite que você controle todas as suas atividades em um só lugar.</p>
            <p>Não há necessidade de realizar cadastro, basta inserir o nome da tarefa e adicionar a listagem.</p>
            <p>Ao concluir determinada demanda, basta marcar a caixa localizada à esquerda do título. Automaticamente o sistema irá alterar a estilização para auxiliar na visualização.</p>
            <p>Qualquer tarefa poderá ser excluída clicando na lixeira localizada ao lado direito de cada item.</p>
          </div>
          
        </section>
      <Footer />
    </div>
    
  )
}