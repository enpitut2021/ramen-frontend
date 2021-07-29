import styles from '../styles/Home.module.css'

const Header = () => {
    return ( 
        <div>
            <header>
                <h1 class={styles.title}>タイトル</h1>
                <nav class={styles.nav}>
                <ul>
                    <li class={styles.menu}><a href="#">項目1</a></li>
                    <li class={styles.menu}><a href="#">項目1</a></li>
                    <li class={styles.menu}><a href="#">項目1</a></li>
                </ul>
                </nav>
            </header>
        </div>
    );
}
 
export default Header;
