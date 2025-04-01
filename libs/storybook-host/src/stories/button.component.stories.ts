import { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "@systemsc/button"

const meta: Meta<ButtonComponent> = {
    component: ButtonComponent
}

export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {
    args: {
        text: 'primary button',
    }
}

export const PrimaryButtonDisabled: Story = {
    args: {
        ...PrimaryButton.args,
        disabled: true,
    }
}

export const SecondaryButton: Story = {
    args: {
        text: 'secondary button',
        variant: 'secondary',
    }
}

export const SecondaryButtonDisabled: Story = {
    args: {
        ...SecondaryButton.args,
        disabled: true,
    }
}

export const TertiaryButton: Story = {
    args: {
        text: 'Tertiary Button',
        variant: 'tertiary'
    }
}

export const TertiaryButtonDisabled: Story = {
    args: {
        ...TertiaryButton.args,
        disabled: true,
    }
}

export const PrimaryButtonViolet: Story = {
    args: {
        ...PrimaryButton.args,
        theme: 'violet',
    }
}

export const PrimaryButtonVioletDisabled: Story = {
    args: {
        ...PrimaryButtonViolet.args,
        disabled: true,
    }
}

export const SecondaryButtonViolet: Story = {
    args: {
        ...SecondaryButton.args,
        theme: 'violet',
    }
}

export const SecondaryButtonVioletDisabled: Story = {
    args: {
        ...SecondaryButtonViolet.args,
        disabled: true
    }
}

export const TertiaryButtonViolet: Story = {
    args: {
        ...TertiaryButton.args,
        theme: 'violet',
    }
}

export const TertiaryButtonVioletDisabled: Story = {
    args: {
        ...TertiaryButtonViolet.args,
        disabled: true,
    }
}
