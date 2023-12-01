import { animate, group, state, style, transition, trigger } from "@angular/animations";

export const conditionAnimation = trigger('conditionalTrigger', [
    transition(':enter', [style({ opacity: 0 }), animate(300, style({ opacity: 1 }))]),
    transition(':leave', [animate(300, style({ opacity: 0 }))])
])

export const shrinkAnimation = trigger('shrinkAnimation', [
    transition('* => *', [
        animate(400, style({ width: 0 })),
        animate(400, style({ width: '*' }))
    ])
])

export const listAnimation = trigger('listAnimation', [
    transition(':enter', [
        style({ opacity: 1, backgroundColor: 'white' }),
        group([
            animate(1000, style({ opacity: 1 })),
            animate(1500, style({ backgroundColor: 'red' }))
        ]),
        animate(1000)
    ]),
    transition(':leave', [animate(300, style({ opacity: 0 }))])
])