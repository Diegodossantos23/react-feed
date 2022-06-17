import styles from './Sidebar.module.css';

export const Sidebar = () => {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={"https://media-exp1.licdn.com/dms/image/C4D16AQEhNOdSRk5W1w/profile-displaybackgroundimage-shrink_350_1400/0/1617631715305?e=1660780800&v=beta&t=dQ2hzb4CoTPCTaV5CqCivOexZDg0-WPvzPSRmHIuXMA"}/>
            <div className={styles.profile}>
                <strong>Diego Rosa</strong>
                <span>Frontent Developer</span>
            </div>

            <footer className={styles.footer}>
                <a className={styles.link} href="#">Edit your profile</a>
            </footer>
        </aside>
    )
}