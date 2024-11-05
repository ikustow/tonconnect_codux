import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import styles from './connect-button.module.scss';
import cx from 'classnames';
import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';

export interface ConnectButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ConnectButton = ({ className }: ConnectButtonProps) => {
    const wallet = useTonWallet();

    const navigate = useNavigate();

    useEffect(() => {
        if (wallet) {
            // Замените '/dashboard' на путь, на который вы хотите перенаправить
            navigate('/DonatePage');
        }
    }, [wallet, navigate]);

    return (
        <header>
            <div className={cx(styles.root, className)}></div>
            <TonConnectButton />
        </header>
    );
};
