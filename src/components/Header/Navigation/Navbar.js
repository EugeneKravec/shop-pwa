import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

class Navbar extends PureComponent {
    render() {
        return <div className={styles.navbar}>
            <Link className={styles.active} to='/'>WOMEN</Link>
            <Link className={styles.links} to='/'>MEN</Link>
            <Link className={styles.links} to='/'>KIDS</Link>
        </div>
    }
}

export default Navbar;