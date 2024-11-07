import { createBoard } from '@wixc3/react-board';
import { NavBarComponent } from '../../../src/components/nav-bar-component/nav-bar-component';

export default createBoard({
    name: 'NavBarComponent',
    Board: () => <NavBarComponent />,
    isSnippet: false,
});
