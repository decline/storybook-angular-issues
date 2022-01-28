import { Component } from '@angular/core';

enum Enum {
    SomeValue = 'someValue'
}

@Component({
    selector: 'storybook-enum',
    template: `
        <h1>6.4.0-alpha.33</h1>
        <p class="ok">Value of enum is shown correctly</p>
        <p>Value: {{ Enum.SomeValue }}</p>
    `
})
export class EnumComponent {
    public readonly Enum = Enum;
}
