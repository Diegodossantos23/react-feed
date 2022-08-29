import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

export const Comment = ({ content }) => {
    return(
       <div className={styles.comment}>
           <Avatar hasBorder={false} src="https://media-exp1.licdn.com/dms/image/C4D03AQFW8JSJrJgZJw/profile-displayphoto-shrink_200_200/0/1642610053916?e=1666224000&v=beta&t=Bxh1QWFalyDOpV5E7-WpJ7_Q_Um227kvTQ-UWOntdmY"/>
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header className={styles.authorHeader}>
                        <div className={styles.authorAndTime}>
                            <strong className={styles.author}>Diego Rosa</strong>
                            <time className={styles.time} title="May 11 at 8:00" dateTime='2022-06-11'>About 1h ago</time>
                        </div>

                        <button className={styles.deleteButton} title="Delete comment">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer className={styles.applaudFooter}>
                    <button className={styles.applaudButton}>
                        <ThumbsUp/>
                        Applaud <span>20</span>
                    </button>
                </footer>
            </div>
        </div> 
    )
}