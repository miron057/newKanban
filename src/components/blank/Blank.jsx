import styles from'./blank.module.css'
export const Blank = ({task, setTask, addTask}) => {
    return (
        <div className={styles.wrap_blank}>
            <label>
                <input value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder='Введите название задачи' className={styles.input} />
            </label>
            <button className={styles.btn} onClick={addTask}>Добавить</button>
        </div>
    )
}