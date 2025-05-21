import styles from './header.module.css';

export const Header = ({ title = "Список задач"}) => {
    return (
        <div className={styles.header_wrap}>
            <span>{title}</span>
        </div>
    )
}