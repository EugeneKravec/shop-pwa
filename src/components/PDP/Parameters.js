import { PureComponent } from "react";
// import switer from '../../images/Switer.jpg'
import styles from './Parameters.module.css'

class Parameters extends PureComponent {
    render() {

        return <div className={styles.container}>
            <h2 className={styles.text}>Apollo</h2>
            <h2 className={styles.secondText}>Running Short</h2>
            <div className={styles.filterContainer}>
                <h2 className={styles.text}>SIZE:</h2>
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
            <div className={styles.filterContainer}>
                <h2 className={styles.text}>COLOR:</h2>
                <ul className={styles.filterList}>
                    <li className={styles.buttonItem}>
                        <button className={styles.buttonFilter} type="button"></button>
                    </li>
                    <li className={styles.buttonItem}>
                        <button className={styles.buttonFilter} type="button"></button>
                    </li>
                    <li className={styles.buttonItem}>
                        <button className={styles.buttonFilter} type="button"></button>
                    </li>
                    <li className={styles.buttonItem}>
                        <button className={styles.buttonFilter} type="button"></button>
                    </li>
                </ul>
            </div>
            <h2 className={styles.text}>PRICE</h2>
            <h2 className={styles.text}>$50.00</h2>
            <button>ADD TO CART</button>
            <p>
                Find stunning women's cocktail dresses and party dresses.
                Stand out in lace and metallic cocktail dresses and party
                dresses from all your favorite brands.
            </p>
        </div>
    }
}
export default Parameters;