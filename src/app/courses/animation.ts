import { animate, state, style, transition, trigger } from "@angular/animations";

export const triggerState = trigger('selectedTrigger', [
    state('defalut', style({
        border: '1px solid black',
        padding: '10px',
        backgroundColor: 'transparent'
    })),
    state('selected', style({
        border: '2px solid black',
        padding:'10px',
        backgroundColor: 'lightblue'
    })),
    transition('default => selected', [style({
        border: '2px solid black'
    }), animate('300ms ease-out')]),
    transition('selected => default', [style({
        border: '2px solid black'
    }), animate('300ms ease-out')]),
])