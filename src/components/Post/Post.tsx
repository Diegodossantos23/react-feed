import { Comment } from '../Comment/Comment';
import styles from './Post.module.css';

interface PostProps {
    author: string;
    country: string;
    content: string;
}

export const Post = ({ author, country, content }: PostProps) => {
    
    return(
        <article className={styles.post}>

            <header className={styles.header}>
                <div className={styles.author}>
                    <img className={styles.avatar} src={"https://github.com/Diegodossantos23.png"}/>
                    <div className={styles.info}>
                        <strong className={styles.name}>Diego dos Santos</strong>
                        <span className={styles.role}>Front-end Developer</span>

                    </div>
                </div>

                <time className={styles.time} title="June 20 at 15:30 PM" dateTime={"2022-20-06"}>Published 1 hour ago</time>
            </header>

            <div className={styles.content}>
                <p>Hey guys</p>
                <p>I just uploaded another project in my portfolio. It's a project I did at NLW Return, Rocketseat event. The project name is DoctorCare 🚀</p>
                <p>👉<a href="">diego.frontend/doctorcare</a></p>
                <p><a href="">#newproject #nlw #rocketseat </a></p>
            </div>

            <form className={styles.commentForm}>
                <strong className={styles.strong}>Your Comment</strong>
                
                <textarea className={styles.commentText}
                    placeholder='Your comment'
                />

                <footer className={styles.footer}>
                    <button className={styles.publishButton} type='submit'>Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
} 
