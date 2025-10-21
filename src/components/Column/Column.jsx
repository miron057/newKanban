import styles from './Column.module.css'

export const Column = ({
    title,
    tasks,
    addTask,
    handleDelete,
    handleChange,
    onDragStart,
    onDragOver,
    onDrop
}) => {

    return (
        <div
            className={styles.column}
            onDragOver={(e) => {
                e.preventDefault();
                onDragOver(e);
            }}
            onDrop={() => onDrop(title)}
        >
            <h2>{title}</h2>
            <div className={styles.tasks}>
                {tasks.map((task, index) => (
                    <div
                        key={task.id}
                        className={styles.task}
                        draggable
                        onDragStart={() => onDragStart(task, title)}
                    >
                        <input
                            className={styles.input}
                            type="text"
                            value={task.content}
                            onChange={(e) => handleChange(e, title, index)}
                        />
                        <button className={styles.del} onClick={() => handleDelete(task.id, title)}>Del</button>
                    </div>
                ))}

            </div>
            <button className={styles.add} onClick={() => addTask(title)}>Add Task</button>
        </div>
    )
}