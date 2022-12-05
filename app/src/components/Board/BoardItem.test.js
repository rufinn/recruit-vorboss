import { render, screen, within } from '@testing-library/react';
import BoardItem from './BoardItem';

describe('Board Item', () => {
    it('should not children if props do not exist', async () => {
        
        render(<BoardItem testId='BOARD_ITEM'/>);
        await screen.findByTestId('BOARD_ITEM');
        expect(screen.queryByTestId('BOARD_LABEL')).not.toBeInTheDocument();
        expect(screen.queryByTestId('BOARD_VALUE')).not.toBeInTheDocument();
        expect(screen.queryByTestId('BOARD_CHILDREN')).not.toBeInTheDocument();
    });

    it('should not render BOARDER_LABEL if label does not exist', async () => {
        render(
            <BoardItem testId='BOARD_ITEM' value={100}>
                Hello World
            </BoardItem>
        );
        await screen.findByTestId('BOARD_ITEM');
        await screen.findByTestId('BOARD_VALUE');
        await screen.findByTestId('BOARD_CHILDREN');
        within(screen.getByTestId('BOARD_VALUE')).getByText('100');
        within(screen.getByTestId('BOARD_CHILDREN')).getByText('Hello World');
        expect(screen.queryByTestId('BAORD_LABEL')).not.toBeInTheDocument();
    });

    it('should not render BOARDER_VALUE if value does not exist', async () => {
        render(
            <BoardItem testId='BOARD_ITEM' label='Test Label'>
                Hello World
            </BoardItem>
        );
        await screen.findByTestId('BOARD_ITEM');
        await screen.findByTestId('BOARD_LABEL');
        await screen.findByTestId('BOARD_CHILDREN');
        within(screen.getByTestId('BOARD_LABEL')).getByText('Test Label');
        within(screen.getByTestId('BOARD_CHILDREN')).getByText('Hello World');
        expect(screen.queryByTestId('BAORD_VALUE')).not.toBeInTheDocument();
    });

    it('should not render BOARDER_CHILDREN if children does not exist', async () => {
        render(
            <BoardItem testId='BOARD_ITEM' label='Test Label' value='Goodbye' />
        );
        await screen.findByTestId('BOARD_ITEM');
        await screen.findByTestId('BOARD_LABEL');
        await screen.findByTestId('BOARD_VALUE');
        within(screen.getByTestId('BOARD_LABEL')).getByText('Test Label');
        within(screen.getByTestId('BOARD_VALUE')).getByText('Goodbye');
        expect(screen.queryByTestId('BAORD_CHILDREN')).not.toBeInTheDocument();
    });
});
