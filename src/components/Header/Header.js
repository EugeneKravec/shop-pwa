import { PureComponent } from 'react';
import styles from '../Header/Header.module.css';
import Navbar from './Navigation/Navbar';
import Logo from './Logo/Logo';
import CurrencySwitcher from './Actions/CurrencySwitcher/CurrencySwitcher';
import CartOverlay from './Actions/CartOverlay/CartOverlay';

class Header extends PureComponent {
    render() {
        return <div className={styles.header}>
            <Navbar />
            <Logo />
            <CurrencySwitcher />
            <CartOverlay />
        </div>
    }
}

export default Header;