import { useState } from 'react'
import './style.scss'

interface TaskFormProps {
  setTasks: (id: number, title: string) => void
}

let id = 0

export function TaskForm({setTasks}:TaskFormProps){

  function validateNewTask(title: string){
    if(title){
      id += 1
      setTasks(id, title)
      setTitle('')
    }
  }

  const [title, setTitle] = useState('')

  return (
    <section className='task-form'>
      <div>
        <h3>Adicione uma nova tarefa</h3>
      </div>
      <div className='task-name'>
        <input type="text" className='input-text' placeholder='Digite o nome da tarefa' onChange={e => setTitle(e.target.value)} value={title}/>
        <input type="button" value="Adicionar" className='input-button' onClick={() => validateNewTask(title)}/>
      </div>
    </section>
  )
}