import {render, fireEvent, act} from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Input from '../Input';

vi.mock('../../../widgets/ThemeSwitcher', () => ({
    useTheme: () => ({ theme: 'Bright' }), // Mocking useTheme hook
}));

describe('Input component', () => {
    it('should render input with placeholder', () => {
        const { getByText } = render(<Input placeholder="Enter text" />);
        expect(getByText('Enter text>')).toBeInTheDocument();
    });

    it('should handle change events', () => {
        const handleChange = vi.fn();
        const { getByRole } = render(<Input value="" onChange={handleChange} />);
        const input = getByRole('textbox');

        act(() => {
            fireEvent.change(input, { target: { value: 'test' } });
        });

        expect(handleChange).toHaveBeenCalledWith('test', '');
    });

    it('should focus input when autoFocus is true', () => {
        const { getByRole } = render(<Input autoFocus />);
        const input = getByRole('textbox');
        expect(input).toHaveFocus();
    });

    it('should display caret when focused', () => {
        const { getByRole, container } = render(<Input value="test" />);
        const input = getByRole('textbox');

        act(() => {
            fireEvent.focus(input);
        });

        expect(container.querySelector('.animate-blink_terminal')).toBeInTheDocument();
    });

    it('should update caret position on select', () => {
        const { getByRole } = render(<Input value="test" />);
        const input = getByRole('textbox');

        act(() => {
            fireEvent.select(input, { target: { selectionStart: 2 } });
        });
        // @ts-expect-error for testing
        expect(input.selectionStart).toBe(2);
    });
});
