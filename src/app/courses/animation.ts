import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export const triggerState = trigger('selectedTrigger', [
    state('defalut', style({
        border: '1px solid black',
        padding: '10px',
        backgroundColor: 'transparent'
    })),
    state('selected', style({
        border: '2px solid black',
        padding: '10px',
        backgroundColor: 'lightblue'
    })),
    transition('default => selected', [style({
        border: '2px solid black'
    }), animate('300ms ease-out')]),
    transition('selected => default', [style({
        border: '2px solid black'
    }), animate('300ms ease-out')]),
])

export const curseAddState = trigger('courseTrigger', [
    transition(':enter', [
        animate('500ms ease-in',
            keyframes([
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)',
                    offset: 0
                }),
                style({
                    opacity: 1,
                    transform: 'translateX(15%)',
                    offset: 0.4
                }),
                style({
                    transform: 'translateX(0%)',
                    offset: 1
                })
            ]))
    ]),
    transition(':leave', [
        animate('500ms ease-in',
            keyframes([
                style({
                    transform: 'translateX(0%)',
                    offset: 0
                }),
                style({
                    transform: 'translateX(-15%)',
                    offset: 0.6
                }),
                style({
                    opacity: 0,
                    transform: 'translateX(100%)',
                    offset: 1
                })
            ]))
    ])
])

export const newCourseState = trigger('newCourseState', [
    transition(':enter', [
        style({
            transform: 'translateY(-100%)',
        }),
        animate('500ms ease-in',
            style({
                transform: 'translateY(0)'
            }))
    ]),
    transition(':leave', [
        style({
            transform: 'translateY(0)'
        }),
        animate('300ms ease-out',
            style({
                transform: 'translateY(-100%)'
            }))
    ])
])