import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardAnimationTrigger', [
      transition(":enter", [
        group([
          query('.card-header,.card-footer', [
            style({
              opacity: 0
            })
          ]),
          style({
            opacity: 0,
            transform: 'translateX(100%)'
          }),
          animate(500),
          query('.card-header', [
            style({
              transform: 'translateY(-100%)'
            }),
            animate(500)
          ]),
          query('.card-footer', [
            style({
              transform: 'translateY(100%)'
            }),
            animate(500)
          ])
        ])
      ]),
      transition(":leave", [
        animate(300, style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }))
      ]),
      transition('* => *', [
        query(':enter', [
          style({
            transform: 'scale(1)'
          }),
          animate(300, style({
            transform: 'scale(1.1)'
          })),
          animate(300)
        ],
          {
            optional: true
          })
      ])
    ])
  ]
})
export class CardComponent {
  showCard: boolean = true
  showParagraph: boolean = true
}
