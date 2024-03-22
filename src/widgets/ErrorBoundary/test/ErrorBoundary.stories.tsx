import type { Meta, StoryObj } from '@storybook/react';
import {ErrorBoundary} from "../index.ts";
import {ThemeDecorator} from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'uiKit/ErrorBoundary',
    component: ErrorBoundary,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
} satisfies Meta<typeof ErrorBoundary>;


export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const ErrorElement = () => {
    throw new Error();
}

export const ErrorBoundary_Error_Light: Story = {
    args: {
        children: <ErrorElement/>,
        fallback: <div>Some Error happened, please reload the page</div>
    },
    decorators: [ThemeDecorator("Bright")]
};

export const ErrorBoundary_Error_Dark: Story = {
    args: {
        children: <ErrorElement/>,
        fallback: <div>Some Error happened, please reload the page</div>
    },
    decorators: [ThemeDecorator("Dark")]
};



