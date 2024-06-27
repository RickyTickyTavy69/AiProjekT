import '@testing-library/jest-dom';
import { afterAll, beforeAll } from 'vitest';

beforeAll(() => {
    global.__PROJECT__ = "vitest"
});
afterAll(() => {
    delete global.__PROJECT__
});
