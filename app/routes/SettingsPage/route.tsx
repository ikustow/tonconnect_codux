import React from 'react';
import { NavBarComponent } from '../../../src/components/nav-bar-component/nav-bar-component';
import styles from './route.module.scss';
import { ConnectButton } from '../../../src/components/connect-button/connect-button';
export default function Setting() {
    return (
        <div className={styles.div1}>
            <div>
                <h1 className={styles.header1}>Settings</h1>
                <ConnectButton />
            </div>
            <div>
                <NavBarComponent />
            </div>
        </div>
    );
}
