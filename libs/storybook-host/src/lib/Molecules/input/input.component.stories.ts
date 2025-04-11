import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '@systemsc/input';

const meta: Meta<InputComponent> = {
  component: InputComponent,
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    multiline: false,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const Multiline: Story = {
  args: {
    ...Primary.args,
    multiline: true,
  },
};

export const MultilineDisabled: Story = {
  args: {
    ...Multiline.args,
    disabled: true,
  },
};

export const PrimaryWithLabel: Story = {
  args: {
    ...Primary.args,
    label: 'Label',
    id: 'primary-id',
  },
};

export const PrimaryWithLabelDisabled: Story = {
  args: {
    ...PrimaryWithLabel.args,
    id: 'primary-id-disabled',
    disabled: true,
  },
};

export const MultilineWithLabel: Story = {
  args: {
    ...Multiline.args,
    label: 'Label',
    id: 'multiline-id',
  },
};

export const MultilineWithLabelDisabled: Story = {
  args: {
    ...MultilineWithLabel.args,
    id: 'multiline-id-disabled',
    disabled: true,
  },
};
