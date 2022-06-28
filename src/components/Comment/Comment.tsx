import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export const Comment = () => {
    return(
       <div className={styles.comment}>
           <img src="https://github.com/Diegodossantos23.png" alt=''/>
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header className={styles.authorHeader}>
                        <div className={styles.authorAndTime}>
                            <strong className={styles.author}>Diego Rosa</strong>
                            <time className={styles.time} title="May 11 at 8:00" dateTime='2022-06-11'>About 1h ago</time>
                        </div>

                        <button className={styles.deleteButton} title="Delete comment">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>
                        Very good Devon, congratulations!!
                    </p>
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