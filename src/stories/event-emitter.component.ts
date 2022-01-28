import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'storybook-event-emitter',
    template: `
        <h1>6.4.0-alpha.34</h1>
        <p class="error">Clicking this button will throw an error in the console ("TypeError: ctx.onClick is not a function")</p>

        <button
                type="button"
                (click)="onClick.emit($event)"
        >
            Click me
        </button>`
})
export class EventEmitterComponent {
    @Output()
    onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}
