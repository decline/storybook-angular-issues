import { Component } from '@angular/core';

enum Enum {
    SomeValue = 'someValue'
}

@Component({
    selector: 'storybook-enum',
    template: `
        <h1>6.4.0-alpha.34</h1>
        <p class="error">Value of enum is not shown</p>
        <p>Value: {{ Enum.SomeValue }}</p>
    `
})
export class EnumComponent {
    public readonly Enum = Enum;
}
