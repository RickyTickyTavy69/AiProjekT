import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Image from '../Image';

const src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArAxgi7SuIgTJsWxexbuXoFjImNpI_mvejw&s";

describe('Image component tests', () => {
    it('should render an image with the correct size class for size M', () => {
        const { getByAltText } = render(<Image size="M" src={src} alt="test image" />);
        const img = getByAltText('test image');
        expect(img).toHaveClass('object-contain w-40 h-40');
    });

    it('should render an image with the correct size class for size XL', () => {
        const { getByAltText } = render(<Image size="XL" src={src} alt="test image" />);
        const img = getByAltText('test image');
        expect(img).toHaveClass('object-contain w-80 h-80');
    });

    it('should render an image with the correct size class for size L', () => {
        const { getByAltText } = render(<Image size="L" src={src} alt="test image" />);
        const img = getByAltText('test image');
        expect(img).toHaveClass('object-contain w-60 h-60');
    });

    it('should pass through additional props to the image element', () => {
        const { getByAltText } = render(<Image size="M" src={src} alt="test image" data-testid="custom" />);
        const img = getByAltText('test image');
        expect(img).toHaveAttribute('data-testid', 'custom');
    });
});
