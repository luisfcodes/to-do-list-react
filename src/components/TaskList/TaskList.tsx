import { useState } from 'react'
import './style.scss'

interface TaskListProps {
  tasks: any
}

export function TaskList({tasks}:TaskListProps) {

  if(tasks && tasks.length > 0){
    return (
      <section className='tilte-list'>
        <h3>Lista de Tarefas</h3>
        <div className='task-list'>
          <ul>
            {tasks.map(element => {
              return (
                <li key={element.id} className='item-list'>
                  <input type="checkbox" name="task-item"/>
                  <span>{element.title}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    )
  } else {
    return (
      <></>
    )
  }
  
}