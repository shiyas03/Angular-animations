import { animate, animation, style, transition, trigger, useAnimation } from "@angular/animations";

const fadeAnimation = animation([
    style({
        opacity: '{{opacity}}'
    }),
    animate('{{duration}}')
],
    // { params: { opacity: 0, duration: '1000ms' } }
)

export const routeAnimationState = (params: any) => trigger('routeAnimationTrigger', [
    transition(':enter', useAnimation(fadeAnimation,
        { params }
        // { params: { opacity: 0, duration: '100ms' } }
    )),
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