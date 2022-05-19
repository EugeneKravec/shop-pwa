import { PureComponent } from "react";
import { Link } from "react-router-dom";
import styles from './ProductСard.module.css'
import switer from '../../images/Switer.jpg'

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
                                <p>$50.00</p>
                            </div>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/PDP">
                            <div>
                                <img src={switer} alt="switer" className={styles.img} />
                            </div>
                            <div>
                                <h3>Apollo Running Short</h3>
                                <p>$50.00</p>
                            </div>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/PDP">
                            <div>
                                <img src={switer} alt="switer" className={styles.img} />
                            </div>
                            <div>
                                <h3>Apollo Running Short</h3>
                                <p>$50.00</p>
                            </div>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/PDP">
                            <div>
                                <img src={switer} alt="switer" className={styles.img} />
                            </div>
                            <div>
                                <h3>Apollo Running Short</h3>
                                <p>$50.00</p>
                            </div>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/PDP">
                            <div>
                                <img src={switer} alt="switer" className={styles.img} />
                            </div>
                            <div>
                                <h3>Apollo Running Short</h3>
                                <p>$50.00</p>
                            </div>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/PDP">
                            <div>
                                <img src={switer} alt="switer" className={styles.img} />
                            </div>
                            <div>
                                <h3>Apollo Running Short</h3>
                                <p>$50.00</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    }

}
export default ProductСard;