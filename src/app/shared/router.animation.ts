import { animate, style, transition, trigger } from "@angular/animations";

export const routeAnimationState = trigger('routeAnimationTrigger', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(300)
    ]),
    transition(":leave", [
        animate(300,
            style({
                opacity: 0
            }))
    ])
])

export const routerSlideAnimationState = trigger('routerSlideAnimationTrigger', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateY(100%)'
        }),
        animate(500)
    ]),
    transition(':leave', [
        animate(500,
            style({
                opacity: 0,
                transform: 'translateY(-100%)'
            }))
    ])
])