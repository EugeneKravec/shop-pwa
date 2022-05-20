import { PureComponent } from "react";
// import switer from '../../images/Switer.jpg'
import styles from './Parameters.module.css'

class Parameters extends PureComponent {
    render() {

        return <div className={styles.container}>
            <h2 className={styles.text}>Apollo</h2>
            <h2 className={styles.secondText}>Running Short</h2>
            <div className={styles.filterContainer}>
                <ul className={styles.filterList}>
                    <li className={styles.buttonItem}>
                        <button className={styles.buttonFilter} type="button">XS</button>
                    </li>
                    <li className={styles.buttonItem}>
                        <button className={styles.buttonFilter} type="button">S</button>
                    </li>
                    <li className={styles.buttonItem}>
                        <button className={styles.buttonFilter} type="button">M</button>
                    </li>
                    <li className={styles.buttonItem}>
                        <button className={styles.buttonFilter} type="button">L</button>
                    </li>
                </ul>
            </div>

        </div>
    }
}
export default Parameters;