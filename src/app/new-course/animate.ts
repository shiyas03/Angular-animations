import { animate, group, query, state, style, transition, trigger } from "@angular/animations";

export const buttonTrigger = trigger('newCourseButtonTrigger', [
    state('valid',
        style({
            backgroundColor: 'green'
        })),
    state('invalid',
        style({ backgroundColor: 'red' }
        )),
    transition('invalid => valid', [
        group([
            animate(300,
                style({
                    transform: 'scale(1.1)'
                })),
            animate(300,
                style({
                    backgroundColor: 'green'
                }))
        ])
    ]),
    transition('valid => invalid', [
        group([
            animate(300,
                style({
                    transform: 'scale(1.1)'
                })),
            animate(300,
                style({
                    backgroundColor: 'red'
                }))
        ])
    ]),
])

export const courseFormState = trigger('courseFormTrigger', [
    transition('* => *', [
        query('.ng-invalid:focus', [
            animate(300, style({
                backgroundColor: 'red'
            }))
        ], { optional: true })
    ])
])