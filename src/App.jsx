import styles from './App.module.css'
import { Blank } from "./components/blank/blank"
import { Column } from './components/Column/Column';
import { Header } from "./components/header/header"
import { useState } from 'react';


function App() {
  const [task, setTask] = useState("");

  const [columns, setColumns] = useState({
    todo: [ { id: 1, content: "frgdffverger" }],
    inprogress: [ { id: 2, content: "dfdgfrgr" } ],
    done: [ { id: 3, content: "хз" } ]
  });

  const addTask = () => {
    if(task === ""){
      alert("Введите название задачи")
      return
    }
    const newTask = {
      id: Date.now(),
      content: task
    }
    setColumns({...columns, todo: [...columns.todo, newTask]})
    setTask("");
  }
 
  
  return (
    <>
    <Header/>
    <Blank task={task} setTask={setTask} addTask={addTask} />
    <div className={styles.conteiner}>
    <Column title="To Do" tasks={columns.todo}/>
    <Column title="In Progress" tasks={columns.inprogress}/>
    <Column title="Done" tasks={columns.done} />
    </div>
   
    </>
  )
}
export default App
