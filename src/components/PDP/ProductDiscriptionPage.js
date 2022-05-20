import { PureComponent } from 'react';
import ImageSlider from './ImageSlider';
import Image from './Image';
import Parameters from './Parameters';
import styles from './ProductDiscriptionPage.module.css';

class ProductDiscriptionPage extends PureComponent {
    render() {
        return <div className={styles.card}>
            <ImageSlider />
            <Image />
            <Parameters />
        </div>
    }
}

export default ProductDiscriptionPage;