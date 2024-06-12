import type { Meta, StoryObj } from '@storybook/react';
import {Image} from "../index.ts";
import {ThemeDecorator} from "../../../config/storybook/ThemeDecorator/ThemeDecorator.tsx";

const meta = {
    title: 'uiKit/Image',
    component: Image,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Image>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Image_Light: Story = {
    args: {
        size: "M",
        src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArAxgi7SuIgTJsWxexbuXoFjImNpI_mvejw&s"
    },
    decorators: [ThemeDecorator("Bright")]
};

export const Image_Dark: Story = {
    args: {
        size: "M",
        src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArAxgi7SuIgTJsWxexbuXoFjImNpI_mvejw&s"
    },
    decorators: [ThemeDecorator("Dark")]
};

export const Image_Dark_L: Story = {
    args: {
        size: "L",
        src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArAxgi7SuIgTJsWxexbuXoFjImNpI_mvejw&s"
    },
    decorators: [ThemeDecorator("Dark")]
};

export const Image_Dark_XL: Story = {
    args: {
        size: "XL",
        src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArAxgi7SuIgTJsWxexbuXoFjImNpI_mvejw&s"
    },
    decorators: [ThemeDecorator("Dark")]
};

