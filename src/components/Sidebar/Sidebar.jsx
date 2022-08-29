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
                    src={"https://media-exp1.licdn.com/dms/image/C4D03AQG-moZWcL1qMg/profile-displayphoto-shrink_800_800/0/1654342657951?e=1666224000&v=beta&t=wQOXZVFfnwbSROW_8XlbDZJRspmSs97o1LD003S9MPk"}
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