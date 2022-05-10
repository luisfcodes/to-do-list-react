import { useEffect, useState } from 'react'
import { Header } from './components/Header/Header'
import { TaskForm } from './components/TaskForm/TaskForm'
import { TaskList } from './components/TaskList/TaskList'
import './styles/global.scss'

interface TasksItens{
  id: number;
  title: string;
}

export function App(){

  const [tasks, setTasks] = useState<TasksItens[]>([])

  function addTest(id: number, title: string){
    setTasks([...tasks, {id: id, title: title}])
  }

  return (
    <>
      <Header />
      <TaskForm setTasks={addTest}/>
      <TaskList tasks={tasks}/>
    </>
  )
}