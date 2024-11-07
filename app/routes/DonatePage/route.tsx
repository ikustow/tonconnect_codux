import React from 'react';
import styles from './route.module.scss';
import { NavBarComponent } from '../../../src/components/nav-bar-component/nav-bar-component';
export default function Donatepage() {
    return (
        <div className={styles.div1}>
            <div className={styles.div2}>Donate Page</div>
            <div className={styles.div4}>
                <NavBarComponent className={styles.navBarComponent} />
            </div>
        </div>
    );
}
