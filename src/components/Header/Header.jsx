import styles from './Header.module.css';

import logo from '../../assets/ignite-logo.svg';

export const Header = () => {
    return(
        <header className={styles.header}>
            <img src={logo} alt="logotipo do site" />
            React Feed
        </header>
    )
}