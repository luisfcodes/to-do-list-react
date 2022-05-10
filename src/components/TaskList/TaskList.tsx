import './style.scss'
import { CgTrash } from "react-icons/cg";

interface TaskListProps {
  tasks: any;
  setTasks: any
}

export function TaskList({tasks, setTasks}:TaskListProps) {

  function removeTask(id: number){
    const newList: any = []
    tasks.map((element : {id: number}) => {
      if(element.id !== id){
        newList.push(element)
      }
    })
    setTasks(newList)
  }

  function isChecked(id: number){
    const newList: any = []
    tasks.map((element : {id: number; isChecked: boolean}) => {
      if(element.id !== id){
        newList.push(element)
      } else {
        element.isChecked = !element.isChecked
        newList.push(element)
      }
    })

    setTasks(newList)
  }

  if(tasks && tasks.length > 0){
    return (
      <section className='tilte-list'>
        <h3>Lista de Tarefas</h3>
        <div className='task-list'>
          <ul>
            {tasks.map((element: { id: number; title: string; isChecked: boolean }) => {
              return (
                <li key={element.id} className='item-list'>
                  <div>
                    <input type="checkbox" name="task-item" onChange={() => isChecked(element.id)} checked={element.isChecked}/>
                    <span className={element.isChecked ? 'checked' : ''}>{element.title}</span>
                  </div>
                  <button onClick={() => removeTask(element.id)}>
                    <CgTrash className='icon-trash'/>
                  </button>
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