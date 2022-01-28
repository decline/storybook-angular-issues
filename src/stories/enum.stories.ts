import { Meta, Story } from '@storybook/angular/types-6-0';
import { EnumComponent } from './enum.component';

export default {
  title: 'Example/Enum',
  component: EnumComponent,
} as Meta;

const Template: Story<EnumComponent> = (args: EnumComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
};
