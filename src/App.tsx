import { useState } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { TaskForm } from './components/TaskForm/TaskForm'
import { TaskList } from './components/TaskList/TaskList'
import './styles/global.scss'

interface TasksItens{
  id: number;
  title: string;
  isChecked: boolean
}

export function App(){

  const [tasks, setTasks] = useState<TasksItens[]>([])

  function addNewTask(id: number, title: string){
    setTasks([...tasks, {id: id, title: title, isChecked: false}])
  }

  return (
      <div className='container'>
          <Header />
          <TaskForm setTasks={addNewTask}/>
          <TaskList tasks={tasks} setTasks={setTasks}/>
          <Footer />
      </div>
  )
}