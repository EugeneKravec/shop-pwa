import { PureComponent } from "react";
import switer from '../../images/Switer.jpg'
import styles from './Image.module.css'

class Image extends PureComponent {
    render() {

        return <div className={styles.container}>
            <img src={switer} alt="switer" width="610" className={styles.img} />
        </div>
    }
}
export default Image;