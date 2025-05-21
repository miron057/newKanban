import styles from './Column.module.css'

export const Column = ({ title, tasks }) => {
    return (
        <div className={styles.column}>
            <h3>{title}</h3>
            {tasks.map((task) => (
                <div key={task.id} className={styles.task}>
                    <span>{task.content}</span>
                    <button className={styles.del}>X</button>
                    <button className={styles.edit}>E</button>
                </div>
            ))}
        </div>
    )
}