import { Meta, Story } from '@storybook/angular/types-6-0';
import { ArrayComponent} from './array.component';

export default {
  title: 'Example/Array',
  component: ArrayComponent,
} as Meta;

const Template: Story<ArrayComponent> = (args: ArrayComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {

};
