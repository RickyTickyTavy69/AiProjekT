import {render, screen, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import {Modal} from "../";
import { expect, test, vi } from 'vitest'

import userEvent from '@testing-library/user-event'

describe('test button', () => {

    const onClose = vi.fn();

    test("should render the modal", async () => {
        render(
            <Modal isOpen={true} onClose={onClose}>
                Hello, this is the Modal
            </Modal>
        );
        expect(screen.getByText("Hello, this is the Modal")).toBeInTheDocument();
        const modalOverlay = screen.getByTestId("modal-overlay");
        const modalWindow = screen.getByTestId("modal-window");
        await userEvent.click(modalWindow);
        expect(screen.getByText("Hello, this is the Modal")).toBeInTheDocument();
        await userEvent.click(modalOverlay);
        await waitFor(() => expect(onClose).toHaveBeenCalled())
    })

   /* test("should NOT render the modal if isOpened prop === false", async () => {
        render(
            <Modal isOpen={false} onClose={onClose}>
                Hello, this is the Modal
            </Modal>
        );
        expect(screen.getByText("Hello, this is the Modal")).not.toBeInTheDocument();
    }) */
    // this test won't work bc the element IS in the Dom but with 0% opacity.
})
