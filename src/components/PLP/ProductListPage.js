import { PureComponent } from 'react';

import styles from '../PLP/ProductListPage.module.css'
import ProductСard from './ProductСard'


class ProductListPage extends PureComponent {
    render() {
        return <div className={styles.listPage}>
            <h2 className={styles.caregory}>Category name</h2>
            <ProductСard />
        </div>
    }
}

export default ProductListPage;