import styles from './App.module.css'
import { Column } from './components/Column/Column';
import { Header } from "./components/header/header"
import { useState } from 'react';

function App() {
  const [task, setTask] = useState("");
  const [draggedTask, setDraggedTask] = useState(null);
  
  const [columns, setColumns] = useState({
    todo: [ { id: 1, content: "frgdffverger" }],
    inprogress: [ { id: 2, content: "dfdgfrgr" } ],
    done: [ { id: 3, content: "хз" } ]
  });

  const addTask = (type) => {
    const newTask = {
      id: Date.now(),
      content: task
    }
    setColumns({...columns, [type]: [...columns[type], newTask]})
    setTask("");
  }

  const handleDelete = (id, type) => {
    const arr = columns
    const res = arr[type].filter(f => f.id !== id)
    setColumns({...columns, [type]: res})
  }

  const handleChange = (event, type, index) => {
    const { value } = event.target
    const updatedTasks = columns[type].map((taskItem, i) =>
      i === index ? { ...taskItem, content: value } : taskItem
    );
    setColumns({ ...columns, [type]: updatedTasks });
  }

  // Функция для начала перетаскивания
  const handleDragStart = (task, columnType) => {
    setDraggedTask({ ...task, sourceColumn: columnType });
  }

  // Функция для обработки события над областью столбца
  const handleDragOver = (event) => {
    event.preventDefault(); // Разрешаем drop
  }

  // Функция для обработки drop
  const handleDrop = (targetColumnType) => {
    if (!draggedTask) return;

    const sourceColumnType = draggedTask.sourceColumn;
    
    // Если задача перемещается в тот же столбец, ничего не делаем
    if (sourceColumnType === targetColumnType) {
      setDraggedTask(null);
      return;
    }

    // Удаляем задачу из исходного столбца
    const sourceTasks = columns[sourceColumnType].filter(
      task => task.id !== draggedTask.id
    );

    // Добавляем задачу в целевой столбец
    const targetTasks = [...columns[targetColumnType], draggedTask];

    setColumns({
      ...columns,
      [sourceColumnType]: sourceTasks,
      [targetColumnType]: targetTasks
    });

    setDraggedTask(null);
  }

  return (
    <>
      <Header/>
      <div className={styles.conteiner}>
        <Column 
          handleChange={handleChange} 
          addTask={addTask}  
          handleDelete={handleDelete} 
          setTask={setColumns} 
          title="todo" 
          tasks={columns.todo}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
        <Column 
          handleChange={handleChange} 
          addTask={addTask} 
          handleDelete={handleDelete} 
          title="inprogress" 
          setTask={setColumns} 
          tasks={columns.inprogress}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
        <Column 
          handleChange={handleChange} 
          addTask={addTask} 
          handleDelete={handleDelete} 
          title="done" 
          setTask={setColumns} 
          tasks={columns.done}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      </div>
    </>
  )
}

export default App