import { createBoard } from '@wixc3/react-board';
import { ConnectButton } from '../../../src/components/connect-button/connect-button';

export default createBoard({
    name: 'ConnectButton',
    Board: () => <ConnectButton />,
});
