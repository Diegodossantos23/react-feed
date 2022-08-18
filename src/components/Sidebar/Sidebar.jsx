import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src={"https://media-exp1.licdn.com/dms/image/C4D16AQEhNOdSRk5W1w/profile-displaybackgroundimage-shrink_350_1400/0/1617631715305?e=1666224000&v=beta&t=aeL1RVzACBNeeSHmpk99Tp1AgOs-zB5twK45pbK2qOw"}
            />
            
            <div className={styles.profile}>

                <Avatar 
                    src={"https://github.com/Diegodossantos23.png"}
                />
                
                <strong className={styles.name}>Diego Rosa</strong>
                <span className={styles.role}>Front-end Developer</span>
            </div>

            <footer className={styles.footer}>
                <a 
                    className={styles.link} 
                    href="#"
                >
                    <PencilLine size={20}/>
                    Edit your profile
                </a>
            </footer>
        </aside>
    )
}