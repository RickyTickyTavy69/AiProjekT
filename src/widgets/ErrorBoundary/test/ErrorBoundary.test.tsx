import {screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {ErrorBoundary} from "../index.ts";
import { expect, test } from 'vitest';
import {Render} from "../../../shared/lib/tests/TestWrapper.tsx";


describe('ErrorBoundary Test', () => {
    test("should render the button", () => {
        Render(
            <ErrorBoundary children={<div>
                Rendered UI
            </div>} fallback={<div>Error Fallback</div>}/>
        )
        expect(screen.getByText("Rendered UI")).toBeInTheDocument();
    })

    test("should render the button", () => {

        const Error = () => {
            throw new Error();
        }

        Render(
            <ErrorBoundary children={<Error/>} fallback={<div>Error Fallback</div>}/>
        )
        expect(screen.getByText("Error Fallback")).toBeInTheDocument();
    })
})
