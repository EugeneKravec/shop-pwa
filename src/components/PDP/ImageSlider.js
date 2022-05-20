import { PureComponent } from "react";
import switer from '../../images/Switer.jpg'
import styles from './ImageSlider.module.css'

class ImageSlider extends PureComponent {
    render() {

        return <div className={styles.container}>
            <img src={switer} alt="switer" width="80" className={styles.img} />
            <img src={switer} alt="switer" width="80" className={styles.img} />
            <img src={switer} alt="switer" width="80" className={styles.img} />
        </div>
    }
}
export default ImageSlider;