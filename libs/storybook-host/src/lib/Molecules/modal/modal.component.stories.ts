import { argsToTemplate, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from '@systemsc/button';
import { ModalComponent } from '@systemsc/modal';
import { TypographyComponent } from '@systemsc/typography';


const meta: Meta<ModalComponent> = {
  component: ModalComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, TypographyComponent],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
      <dsc-modal ${argsToTemplate(args)}>
        <p>
          <dsc-typography>
            Today, every company I talk to wants to implement a design system from
            scratch. Unfortunately, the details of a design system are not
            explored, so often they are not used to the maximum to create a useful
            user experience.
          </dsc-typography>
        </p>

        <dsc-button>Primary button</dsc-button>
      </dsc-modal>
    `,
  }),
};
export default meta;
type Story = StoryObj<ModalComponent>;

export const Open: Story = {
  args: {
    modalTitle: 'Heading',
    isOpen: true,
  },
};

export const Closed: Story = {
  args: {
    ...Open.args,
    isOpen: false,
  },
};
