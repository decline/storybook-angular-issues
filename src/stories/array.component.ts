import { Component, Input } from '@angular/core';

@Component({
    selector: 'storybook-array',
    template: `
        <h1>6.4.0-alpha.34</h1>
        <p class="error">Value is a string, but it should be an array! Length of array is the length of the string.</p>
        <p>Array: {{ array | json }}</p>
        <p>Array length: {{ array.length }}</p>
    `
})
export class ArrayComponent {
    @Input() array = ['one', 'two', 'three'];
}
