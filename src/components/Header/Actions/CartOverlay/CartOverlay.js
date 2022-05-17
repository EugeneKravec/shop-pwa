import { PureComponent } from 'react';
import Group from '../../../../images/Cart.svg'
import styles from './CartOverlay.module.css'

class CartOverlay extends PureComponent {
    render() {
        return <div className={styles.logo}>
            <img src={Group} alt="logo" />
        </div>
    }
}

export default CartOverlay;