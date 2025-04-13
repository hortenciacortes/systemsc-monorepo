import { argsToTemplate, Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '@systemsc/button';

type ButtonInputsAndCustomArgs = ButtonComponent & { text: string };

const meta: Meta<ButtonInputsAndCustomArgs> = {
  component: ButtonComponent,
  args: {
    text: 'Action',
  },
  render: ({ text, ...buttonArgs }) => ({
    props: buttonArgs,
    template: `
        <dsc-button ${argsToTemplate(buttonArgs)}>
        ${text}
        </dsc-button>
      `,
  }),
  parameters: {
    controls: {
      exclude: ['getClasses'],
    },
  },
};

export default meta;

type Story = StoryObj<ButtonInputsAndCustomArgs>;

export const PrimaryButton: Story = {
  args: {},
};

export const PrimaryButtonDisabled: Story = {
  args: {
    ...PrimaryButton.args,
    disabled: true,
  },
};

export const SecondaryButton: Story = {
  args: {
    variant: 'secondary',
  },
};

export const SecondaryButtonDisabled: Story = {
  args: {
    ...SecondaryButton.args,
    disabled: true,
  },
};

export const TertiaryButton: Story = {
  args: {
    variant: 'tertiary',
  },
};

export const TertiaryButtonDisabled: Story = {
  args: {
    ...TertiaryButton.args,
    disabled: true,
  },
};

export const PrimaryButtonViolet: Story = {
  args: {
    ...PrimaryButton.args,
    theme: 'violet',
  },
};

export const PrimaryButtonVioletDisabled: Story = {
  args: {
    ...PrimaryButtonViolet.args,
    disabled: true,
  },
};

export const SecondaryButtonViolet: Story = {
  args: {
    ...SecondaryButton.args,
    theme: 'violet',
  },
};

export const SecondaryButtonVioletDisabled: Story = {
  args: {
    ...SecondaryButtonViolet.args,
    disabled: true,
  },
};

export const TertiaryButtonViolet: Story = {
  args: {
    ...TertiaryButton.args,
    theme: 'violet',
  },
};

export const TertiaryButtonVioletDisabled: Story = {
  args: {
    ...TertiaryButtonViolet.args,
    disabled: true,
  },
};
