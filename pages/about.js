import styles from '../styles/Home.module.css'
import Header from "../comps/Header.js"

const About = () => {
    return ( 
        <div>
            <Header />
        <div className={styles.container}>
            
            <div className={styles.box}>
                <h1>残高</h1>
                <h1>12.34 Eth</h1>
            </div>
        </div>
        </div>
     );
}
 
export default About;
