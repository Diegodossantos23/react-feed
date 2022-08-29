import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

import styles from './Post.module.css';

/*interface PostProps {
    author: any;
    content: any;
    publishedAt: any;
}*/

export const Post = ({ author, publishedAt, content }) => {
    const [comments, setComments] = useState(['Conteudo maneiro :D']);
    const [ newCommentText, setNewCommentText ] = useState('');

    const publishedDateFormatted = format(publishedAt, "LLLL  d 'at' HH:mm 'h'", { locale: ptBR })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

    const handleCreateNewComment = () => {
        event?.preventDefault();

        setComments([ ...comments, newCommentText ]);
        setNewCommentText('');
    }

    const handleNewCommentChange = () => {
        setNewCommentText(event?.target.value);
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
                        return <p key={line.content}>{line.content}</p>
                    } else if(line.type === 'link') {
                        return <p key={line.content}><a href=''>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'end',
                }}>
                    <strong>Comment {comments.length}</strong>
                </div>

                <textarea className={styles.commentText}
                    name='comment'
                    placeholder='Your comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer className={styles.footer}>
                    <button className={styles.publishButton} type='submit'>Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>

               {comments.map(comment => {
                return <Comment key={comment} content={comment}/>
               })}

            </div>
        </article>
    )
} 
