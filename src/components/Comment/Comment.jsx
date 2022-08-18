import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

export const Comment = ({ content }) => {
    return(
       <div className={styles.comment}>
           <Avatar hasBorder={false} src="https://github.com/Diegodossantos23.png"/>
            
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