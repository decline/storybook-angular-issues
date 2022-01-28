import { Meta, Story } from '@storybook/angular/types-6-0';
import { EventEmitterComponent } from './event-emitter.component';

export default {
  title: 'Example/Event Emitter',
  component: EventEmitterComponent,
} as Meta;

const Template: Story<EventEmitterComponent> = (args: EventEmitterComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
};
