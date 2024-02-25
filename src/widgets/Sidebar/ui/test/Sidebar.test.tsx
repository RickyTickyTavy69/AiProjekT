import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom";
import { expect, test } from 'vitest'
import {Render} from "../../../../shared/lib/tests/TestWrapper.tsx";
import Sidebar from "../Sidebar/Sidebar.tsx";

const user = userEvent.setup();

describe('Sidebar', () => {
    test("should render the Sidebar", () => {
        Render(Sidebar)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    })
    test("should toggle the Sidebar", async () => {
        Render(Sidebar);
        expect(screen.getByText("open")).toBeInTheDocument();
        const button = screen.getByTestId("button");
        await user.click(button);
        expect(screen.getByText("close")).toBeInTheDocument();
        expect(screen.queryByAltText("open")).not.toBeInTheDocument();
    })
})
