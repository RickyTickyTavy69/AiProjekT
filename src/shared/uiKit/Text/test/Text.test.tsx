import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import {Text} from '../';
import {expect, test} from "vitest";


describe('Text comp tests', () => {
    test('renders with default primary color and correct title and text', () => {
        const title = 'Sample Title';
        const text = 'Sample Text';
        render(<Text
            title={title}
            text={text}
        />);
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByText(title)).toHaveClass('text-black dark:text-white');
    });
    test('renders with error color when error style selected', () => {
        const title = 'Sample Title';
        const text = 'Sample Text';
        render(<Text
            color={'error'}
            title={title}
            text={text}
        />);
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByText(title)).toHaveClass('text-error');
        expect(screen.getByText(text)).toHaveClass('text-error');
    });
    test('renders with warning color when warning style selected', () => {
        const title = 'Sample Title';
        const text = 'Sample Text';
        render(<Text
            color={'warning'}
            title={title}
            text={text}
        />);
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByText(title)).toHaveClass('text-warning');
        expect(screen.getByText(text)).toHaveClass('text-warning');
    });
})
