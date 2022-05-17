import { PureComponent } from 'react';
import Group from '../../../images/Group.svg'
import styles from './Logo.module.css'

class Logo extends PureComponent {
    render() {
        return <div>
            <img src={Group} className={styles.logo} alt="logo" />
        </div>
    }
}

export default Logo;