import React, { useState } from 'react'
import './style.scss'

interface TaskFormProps {
  setTasks: (id: number, title: string) => void
}

let id = 0

export function TaskForm({setTasks}:TaskFormProps){

  function validateNewTask(title: string, event: React.MouseEvent){
    event.preventDefault()
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
      <form className='task-name'>
        <input type="text" className='input-text' placeholder='Insira o nome da tarefa' onChange={e => setTitle(e.target.value)} value={title}/>
        <input type="submit" value="Adicionar" className='input-button' onClick={e => validateNewTask(title, e)}/>
      </form>
    </section>
  )
}