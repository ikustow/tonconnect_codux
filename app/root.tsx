import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    isRouteErrorResponse,
    useRouteError,
} from '@remix-run/react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { ErrorComponent } from '~/components/error-component/error-component';
import '~/styles/index.scss';
import styles from './root.module.scss';
import classNames from 'classnames';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return (
        <div>
            <TonConnectUIProvider manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json">
                <Outlet />
            </TonConnectUIProvider>
        </div>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();
    const { title, message } = getErrorDetails(error);

    return <ErrorComponent message={message} title={title} />;
}

function getErrorDetails(error: unknown) {
    let title: string;
    let message: string | undefined;

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            title = 'Page Not Found';
            message = "Looks like the page you're trying to visit doesn't exist";
        } else {
            title = `${error.status} - ${error.statusText}`;
            message = error.data?.message ?? '';
        }
    } else {
        title = 'Unknown error ocurred';
    }

    return { title, message };
}
