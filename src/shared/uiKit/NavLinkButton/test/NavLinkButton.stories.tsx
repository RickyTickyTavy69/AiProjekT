import type { Meta, StoryObj } from '@storybook/react';
import {NavLinkButton} from "../index.ts";
import {ThemeDecorator} from "../../../config/storybook/ThemeDecorator/ThemeDecorator.tsx";
import {RouterDecorator} from "../../../config/storybook/ThemeDecorator/RouterDecorator.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'uiKit/NavLinkButton',
    component: NavLinkButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        title: {title: "Button"}
    },
} satisfies Meta<typeof NavLinkButton>;


export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NavLinkButton_Light: Story = {
    args: {
        to: "/",
        children: "NavLink Light"
    },
    decorators: [ThemeDecorator("Bright"), RouterDecorator()]
};

export const NavLinkButton_Dark: Story = {
    args: {
        to: "/",
        children: "NavLink Dark"
    },
    decorators: [ThemeDecorator("Dark"), RouterDecorator()]
};
