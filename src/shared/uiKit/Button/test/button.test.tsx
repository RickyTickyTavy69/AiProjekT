import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button.tsx";
import { expect, test } from 'vitest'

describe('test button', () => {
    test("should render the button", () => {
        render(<Button title={"Click"}/>);
        expect(screen.getByText("Click")).toBeInTheDocument();
    })
})
