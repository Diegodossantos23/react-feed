import styles from './Post.module.css';

interface PostProps {
    author: string;
    country: string;
    content: string;
}

export const Post = ({ author, country, content }: PostProps) => {
    
    return(
        <div className={styles.container}>
            <h3>{author}</h3>
            <h5>{country}</h5>
            <p>{content}</p>
        </div>
    )
} 
