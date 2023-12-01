import { animate, state, style, transition, trigger } from "@angular/animations";

export const conditionAnimation = trigger('conditionalTrigger', [
    transition('void => shown', [style({ opacity: 0 }), animate(300, style({ opacity: 1 }))]),
    transition('shown => void', [animate(300, style({ opacity: 0 }))])
])

export const shrinkAnimation = trigger('shrinkAnimation', [
    transition('* => *', [
        animate(400, style({ width: 0 })),
        animate(400, style({ width: '*' }))
    ])
])