import { Component, Input } from '@angular/core';

@Component({
    selector: 'storybook-array',
    template: `
        <h1>6.4.0-alpha.33</h1>
        <p class="ok">Value is an array. Length is correct.</p>
        <p>Array: {{ array | json }}</p>
        <p>Array length: {{ array.length }}</p>
    `
})
export class ArrayComponent {
    @Input() array = ['one', 'two', 'three'];
}
