import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should not render if inputType does not exist', async () => {
        render(
            <Input
                testid='TESTING'
                caption='Test Caption'
                placeholder={'testing'}
                onSubmit={() => {}}
            />
        );
        expect(screen.queryByTestId('TESTING')).not.toBeInTheDocument();
        expect(screen.queryByTestId('TESTINGINPUT_CAPTION')).not.toBeInTheDocument();
        expect(screen.queryByTestId('TESTINGINPUT_INPUT')).not.toBeInTheDocument();
        expect(screen.queryByTestId('TESTINGINPUT_SUBMIT')).not.toBeInTheDocument();
    });

    it('should not render INPUT_CAPTION if caption does not exist', async () => {
        render(
            <Input
                testid='TESTING'
                inputType='text'
                placeholder={'testing'}
                onSubmit={() => {}}
            />
        );
        await screen.findByTestId('TESTING');
        await screen.findByTestId('TESTINGINPUT_INPUT');
        await screen.findByTestId('TESTINGINPUT_SUBMIT');
        expect(screen.queryByTestId('TESTINGINPUT_CAPTION')).not.toBeInTheDocument();
    });

    it('should trigger with input value onSubmit when button is clicked', async () => {
        const mockOnSubmit = jest.fn();
        render(
            <Input
                testid='TESTING'
                inputType='text'
                placeholder={'testing'}
                onSubmit={mockOnSubmit}
            />
        );
        await screen.findByTestId('TESTINGINPUT_SUBMIT');
        fireEvent.change(screen.getByTestId('TESTINGINPUT_INPUT'), {
            target: { value: "Hello world" }
        });
        screen.getByTestId('TESTINGINPUT_SUBMIT').click();
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
        expect(mockOnSubmit).toHaveBeenCalledWith("Hello world");
    });
});
