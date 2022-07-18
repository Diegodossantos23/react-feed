import { format, formatDistanceToNow } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

import styles from './Post.module.css';

interface PostProps {
    author: any;
    content: any;
    publishedAt: any;
}

export const Post: React.FC<PostProps> = ({ author, publishedAt, content }) => {

    const publishedDateFormatted = format(publishedAt, "LLLL  d 'at' HH:mm 'h'", {
        locale: enUS
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: enUS,
        addSuffix: true
    })

    return(
        <article className={styles.post}>

            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl}/>
                    <div className={styles.info}>
                        <strong className={styles.name}>{author.name}</strong>
                        <span className={styles.role}>{author.role}</span>

                    </div>
                </div>

                <time className={styles.time} title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if(line.type === 'link') {
                        return <p><a href=''>{line.content}</a></p>
                    }
                })}
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
