import type { Meta, StoryObj } from '@storybook/react';
import Input from '../Input';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'uiKit/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input_Light: Story = {
    args: {
        value: 'Sample text',
        placeholder: 'Enter text',
        onChange: (value, name) => console.log(value, name),
    },
    decorators: [ThemeDecorator('Bright')],
};

export const Input_Dark: Story = {
    args: {
        value: 'Sample text',
        placeholder: 'Enter text',
        onChange: (value, name) => console.log(value, name),
    },
    decorators: [ThemeDecorator('Dark')],
};

export const Input_AutoFocus: Story = {
    args: {
        value: 'AutoFocus',
        autoFocus: true,
        placeholder: 'Focus me',
        onChange: (value, name) => console.log(value, name),
    },
    decorators: [ThemeDecorator('Bright')],
};

export const Input_ReadOnly: Story = {
    args: {
        value: 'ReadOnly',
        placeholder: 'Read only',
        readonly: true,
    },
    decorators: [ThemeDecorator('Bright')],
};

export const Input_WithSelect: Story = {
    args: {
        value: 'Select me',
        placeholder: 'Select me',
        onChange: (value, name) => console.log(value, name),
    },
    decorators: [ThemeDecorator('Bright')],
};
