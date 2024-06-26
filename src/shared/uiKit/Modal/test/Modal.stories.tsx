import type { Meta, StoryObj } from '@storybook/react';
import {Modal} from "../index.ts";
import {ThemeDecorator} from "../../../config/storybook/ThemeDecorator/ThemeDecorator.tsx";

/* const test = () => {
    return(
        <div>test</div>
    )
} */


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'uiKit/Modal',
    component: Modal,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Modal>;


export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

// export const Test: Story = {}

export const Modal_Light: Story = {
    args: {
        isOpen: true,
        onClose: () => {},
        children : "this is modal",
        isTest: true,
    },
    decorators: [ThemeDecorator("Bright")]
};

 export const Modal_Dark: Story = {
    args: {
        isOpen: true,
        onClose: () => {},
        children : "this is modal",
        isTest: true,
    },
    decorators: [ThemeDecorator("Dark")]
};
