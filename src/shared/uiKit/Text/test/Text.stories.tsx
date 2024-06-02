import type { Meta, StoryObj } from '@storybook/react';
import {Text} from "../";
import {ThemeDecorator} from "../../../config/storybook/ThemeDecorator/ThemeDecorator.tsx";


const meta = {
    title: 'uiKit/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;


type Story = StoryObj<typeof meta>;


export const Text_Primary: Story = {
    args: {
        title: "Sample Text",
        text: "съешь ещё этих мягких французских булок да выпей чаю",
    },
    decorators: [ThemeDecorator("Bright")]
};

export const Text_Warning: Story = {
    args: {
        color: "warning",
        title: "Sample Text",
        text: "съешь ещё этих мягких французских булок да выпей чаю",
    },
    decorators: [ThemeDecorator("Bright")]
};

export const Text_Error: Story = {
    args: {
        color: "error",
        title: "Sample Text",
        text: "съешь ещё этих мягких французских булок да выпей чаю",
    },
    decorators: [ThemeDecorator("Bright")]
};

// dark
export const Text_Primary_Dark: Story = {
    args: {
        title: "Sample Text",
        text: "съешь ещё этих мягких французских булок да выпей чаю",
    },
    decorators: [ThemeDecorator("Dark")]
};

export const Text_Warning_Dark: Story = {
    args: {
        color: "warning",
        title: "Sample Text",
        text: "съешь ещё этих мягких французских булок да выпей чаю",
    },
    decorators: [ThemeDecorator("Dark")]
};

export const Text_Error_Dark: Story = {
    args: {
        color: "error",
        title: "Sample Text",
        text: "съешь ещё этих мягких французских булок да выпей чаю",
    },
    decorators: [ThemeDecorator("Dark")]
};
