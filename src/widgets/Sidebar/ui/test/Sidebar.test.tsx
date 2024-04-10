import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom";
import { expect, test } from 'vitest'
import {Render} from "../../../../shared/lib/tests/TestWrapper.tsx";
import Sidebar from "../Sidebar/Sidebar.tsx";
import {withTranslation} from "react-i18next";

const user = userEvent.setup();

describe('Sidebar', () => {
    const SidebarWithTranslation = withTranslation()(Sidebar)

    test("should render the Sidebar", () => {
        Render(<SidebarWithTranslation/>)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    })

    test("should toggle the Sidebar", async () => {
        Render(<SidebarWithTranslation/>);
        expect(screen.getByText(`>`)).toBeInTheDocument();
        const button = screen.getByTestId("button");
        await user.click(button);
        expect(screen.getByText("<")).toBeInTheDocument();
        expect(screen.queryByAltText(">")).not.toBeInTheDocument();
    })
})
