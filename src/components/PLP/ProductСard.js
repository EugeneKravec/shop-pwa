import { PureComponent } from "react";
import { Link } from "react-router-dom";
import styles from './ProductСard.module.css'
import switer from '../../images/Switer.jpg'
import pinkSwiter from '../../images/pinkSwiter.jpg'
import whiteSwiter from '../../images/whiteSwiter.jpg'
import bag from '../../images/bag.jpg'

class ProductСard extends PureComponent {
    render() {
        return <div>
            <div>
                <ul className={styles.card} >
                    <li className={styles.item}>
                        <Link className={styles.link} to="/PDP">
                            <div>
                                <img src={switer} alt="switer" width="354" />
                            </div>
                            <div>
                                <h3 className={styles.text}>Apollo Running Short</h3>
                                <p className={styles.price}>$50.00</p>
                            </div>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/PDP">
                            <div>
                                <img src={pinkSwiter} alt="pinkSwiter" width="354" />
                            </div>
                            <div>
                                <h3 className={styles.text}>Apollo Running Short</h3>
                                <p className={styles.price}>$50.00</p>
                            </div>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/PDP">
                            <div>
                                <img src={whiteSwiter} alt="switer" width="354" />
                                <div className={styles.overlay}>
                                    <p className={styles.text}>OUT OF STOCK</p>
                                </div>
                            </div>
                            <div>
                                <h3 className={styles.text}>Apollo Running Short</h3>
                                <p className={styles.price}>$50.00</p>
                            </div>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/PDP">
                            <div>
                                <img src={bag} alt="bag" width="354" />
                            </div>
                            <div>
                                <h3 className={styles.text}>Apollo Running Short</h3>
                                <p className={styles.price}>$50.00</p>
                            </div>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/PDP">
                            <div>
                                <img src={switer} alt="switer" width="354" />
                            </div>
                            <div>
                                <h3 className={styles.text}>Apollo Running Short</h3>
                                <p className={styles.price}>$50.00</p>
                            </div>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/PDP">
                            <div>
                                <img src={whiteSwiter} alt="whiteSwiter" width="354" />
                            </div>
                            <div>
                                <h3 className={styles.text}>Apollo Running Short</h3>
                                <p className={styles.price}>$50.00</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    }

}
export default ProductСard;