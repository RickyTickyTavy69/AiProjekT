import type { Meta, StoryObj } from '@storybook/react';
import {Button} from "../index.ts";
import {ThemeDecorator} from "../../../config/storybook/ThemeDecorator/ThemeDecorator.tsx";

const meta = {
    title: 'uiKit/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Button_Light: Story = {
    args: {
        title: "Button",
        onClick: () => {},
    },
    decorators: [ThemeDecorator("Bright")]
};

export const Button_Dark: Story = {
    args: {
       title: "Button",
       onClick: () => {},
    },
    decorators: [ThemeDecorator("Dark")]
};

export const ClickMe_Light: Story = {
    args: {
        title: "Click Me",
        onClick: () => {alert("u clicked")},
    },
    decorators: [ThemeDecorator("Bright")]
};


export const Button_Light_Middle: Story = {
    args: {
        title: "Button",
        onClick: () => {},
        size: "M"
    },
    decorators: [ThemeDecorator("Bright")]
};

export const Button_Light_Large: Story = {
    args: {
        title: "Button",
        onClick: () => {},
        size: "L"
    },
    decorators: [ThemeDecorator("Bright")]
};

export const Button_Light_XL: Story = {
    args: {
        title: "Button",
        onClick: () => {},
        size: "XL"
    },
    decorators: [ThemeDecorator("Bright")]
};
