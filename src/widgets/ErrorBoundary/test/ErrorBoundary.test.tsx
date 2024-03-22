import {screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {ErrorBoundary} from "../index.ts";
import { expect, test } from 'vitest';
import {Render} from "../../../shared/lib/tests/TestWrapper.tsx";


describe('ErrorBoundary Test', () => {
    test("should render the button", () => {
        Render(
            <ErrorBoundary fallback={<div>Error Fallback</div>}>
                <div>
                    Rendered UI
                </div>
            </ErrorBoundary>
        )
        expect(screen.getByText("Rendered UI")).toBeInTheDocument();
    })

    test("should render the button", () => {

        const ErrorElement = () => {
            throw new Error();
        }

        Render(
            <ErrorBoundary fallback={<div>Error Fallback</div>}>
                <ErrorElement/>
            </ErrorBoundary>
        )
        expect(screen.getByText("Error Fallback")).toBeInTheDocument();
    })
})
