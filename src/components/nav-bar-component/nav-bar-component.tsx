import styles from './nav-bar-component.module.scss';
import cx from 'classnames';

export interface NavBarComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NavBarComponent = ({ className }: NavBarComponentProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <nav className={styles.navbar}>
                <button className={styles['navbar-btn']}>
                    <a href="/DonatePage" className={styles['navbar-link']}>
                        Donate
                    </a>
                </button>
                <button className={styles['navbar-btn']}>
                    <a href="/SettingsPage" className={styles['navbar-link']}>
                        Settings
                    </a>
                </button>
            </nav>
        </div>
    );
};
