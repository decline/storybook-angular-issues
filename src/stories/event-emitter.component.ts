import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'storybook-event-emitter',
    template: `
        <h1>6.4.0-alpha.33</h1>
        <p class="ok">Clicking this button will correctly show event in "Actions" tab</p>

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
