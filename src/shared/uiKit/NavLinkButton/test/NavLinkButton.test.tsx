import {screen} from "@testing-library/react";
import {Render} from "../../../lib/tests/TestWrapper.tsx";
import "@testing-library/jest-dom";
import {NavLinkButton} from "../index.ts";
import { expect, test } from 'vitest'

describe('test NavLinkButton', () => {
    test("should render the NavLinkButton correctly", () => {
        Render(
            <NavLinkButton to={"main"}>Link</NavLinkButton>
        );

        expect(screen.getByText("Link")).toBeInTheDocument();
    })
})
