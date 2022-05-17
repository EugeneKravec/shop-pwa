import { PureComponent } from 'react';
// import Group from '../../../Group.svg'
import styles from './CurrencySwitcher.module.css'

class CurrencySwitcher extends PureComponent {
    render() {
        return <div>
            <form className={styles.currency} action="">
                <select id="currency" className={styles.border}>
                    <option label='$ USD'></option>
                    <option>€ EUR</option>
                    <option>¥ JPY</option>
                </select>
            </form>
        </div>
    }
}

export default CurrencySwitcher;