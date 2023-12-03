import { animate, group, keyframes, state, style, transition, trigger } from "@angular/animations";

export const conditionAnimation = trigger('conditionalTrigger', [
    transition(':enter', [style({ opacity: 0 }), animate(300, style({ opacity: 1 }))]),
    transition(':leave', [animate(300, style({ opacity: 0 }))])
])

export const shrinkAnimation = trigger('shrinkAnimation', [
    transition('* => *', [
        animate('4000ms ease-in', style({ width: 0 })),
        animate('4000ms ease-out', style({ width: '*' }))
    ])
])

export const listAnimation = trigger('listAnimation', [
    transition(':enter', [
        style({ opacity: 1, backgroundColor: 'white' }),
        group([
            animate(1000, style({ opacity: 1 })),
            animate('4000ms ease-in',
                keyframes([
                    style({
                        backgroundColor: 'red',
                        offset: 0
                    }),
                    style({
                        backgroundColor: 'green',
                        offset: 0.7
                    }),
                    style({
                        backgroundColor: 'yellow',
                        offset: 1
                    })
                ]))
        ]),
        animate(1000)
    ]),
    transition(':leave', [animate(300, style({ opacity: 0 }))])
])

//cubic-beizer