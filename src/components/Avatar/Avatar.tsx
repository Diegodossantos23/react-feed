import styles from './Avatar.module.css';

interface AvatarProps {
    hasBorder: boolean;
    src: any;
}

export const Avatar = ({ hasBorder = true, src }: AvatarProps) => {
    
    return(
        <div>
            <img 
                className={hasBorder ?  styles.avatarWithBorder : styles.avatar } 
                src={src}
            />
        </div>
    )
}