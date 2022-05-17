import { PureComponent } from "react";
import { Link } from "react-router-dom";
import styles from './ProductСard.module.css'
import switer from '../../images/Switer.jpg'

class ProductСard extends PureComponent {
    render() {
        return <div>
            <div className={styles.card}>
                <ul>
                    <li>
                        <Link to="/PDP">
                            <div>
                                <img src={switer} alt="switer" />
                            </div>
                            <div>
                                <h3>Apollo Running Short</h3>
                                <p>$50.00</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/PDP">
                            <div>
                                <img src={switer} alt="switer" />
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