import { format, formatDistanceToNow } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import { useState } from 'react';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

import styles from './Post.module.css';
interface PostProps {
    author: any;
    content: any;
    publishedAt: any;
}

export const Post: React.FC<PostProps> = ({ author, publishedAt, content }) => {
    const [comments, setComments] = useState([
        1,
        2,
    ]);

    const publishedDateFormatted = format(publishedAt, "LLLL  d 'at' HH:mm 'h'", {
        locale: enUS
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: enUS,
        addSuffix: true
    })

    const handleCreateNewCommen = () => {
        event?.preventDefault();

        setComments([...comments, comments.length++]);

        comments.push(3);
    }

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

            <form onSubmit={handleCreateNewCommen} className={styles.commentForm}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'end',
                }}>
                    <strong>Comment {comments.length}</strong>
                </div>

                <textarea className={styles.commentText}
                    placeholder='Your comment'
                />

                <footer className={styles.footer}>
                    <button className={styles.publishButton} type='submit'>Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>

               {comments.map(comment => {
                return <Comment/>
               })}

            </div>
        </article>
    )
} 
