import classNames from 'classnames';
import styles from './_index.module.scss';
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import commonStyles from '~/styles/common-styles.module.scss';
import { getUrlOriginWithPath } from '~/utils';
import styles0 from './route.module.scss';
import ImagePng from '../../../src/assets/img/image.png';
import ImageCopyPng from '../../../src/assets/img/image copy.png';
import ImageCopy2Png from '../../../src/assets/img/image copy 2.png';
import { ReactComponent as SupabaseLogoSvg } from '../../../src/assets/svg/supabase-logo.svg';
import { ConnectButton } from '../../../src/components/connect-button/connect-button';
import { TonConnectButton } from '@tonconnect/ui-react';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    return (
        <div className={styles0['home-page-class']}>
            <h3 className={styles0.header1}>DonApp</h3>
            <img src={ImagePng} height="250" />
            <h3 className={styles0.header2}>Connect with Ton</h3>
            <ConnectButton className={styles0.connectButton} />
            <h2 className={styles0.header3}>Made with</h2>
            <div className={styles0.div2}>
                <img src={ImageCopy2Png} height="60" className={styles0.img1} />
                <img src={ImageCopyPng} height="60" className={styles0.img2} />
                <SupabaseLogoSvg className={styles0.supabaseLogoSvg} />
            </div>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Blank Starter';
    const description = 'Welcome to the Blank Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
