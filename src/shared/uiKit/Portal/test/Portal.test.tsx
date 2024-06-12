import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Portal from '../Portal';

describe('Portal component', () => {
    it('renders children into the provided element', () => {
        const portalRoot = document.createElement('div');
        document.body.appendChild(portalRoot);

        const { getByText } = render(
            <Portal element={portalRoot}>
                <div>Portal Content</div>
            </Portal>
        );

        expect(getByText('Portal Content')).toBeInTheDocument();
        expect(portalRoot).toContainElement(getByText('Portal Content'));
    });

    it('renders children into the default document.body', () => {
        const { getByText } = render(
            <Portal>
                <div>Default Portal Content</div>
            </Portal>
        );

        expect(getByText('Default Portal Content')).toBeInTheDocument();
        expect(document.body).toContainElement(getByText('Default Portal Content'));
    });
});
