import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('clickedState', [
      state('default', style({
        width: '100px',
        height: '100px',
        backgroundColor: 'orange'
      })),
      state('clicked', style({
        width: '200px',
        height: '200px',
        backgroundColor: 'blue'
      })),
      transition('default => clicked', animate('1s 200ms ease-out'))
    ]),
    trigger('numberState', [
      state('unselected', style({
        border: '1px solid black',
        padding: '5px'
      })),
      state('selected', style({
        border: '2px solid blue',
        padding: '4px',
        backgroundColor: 'lightblue'
      })),
      transition('unselected => selected', [style({
        border: '2px solid black',
        padding: '4px'
      }), animate(300)])
    ])
  ]
})
export class AnimationComponent implements OnInit {
  clickedInfo: string = 'default'

  selectedNumber!: number

  onNumberSelected(event: Event) {
    this.selectedNumber = +(<HTMLInputElement>event.target).value
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.clickedInfo = 'clicked'
    }, 3000)
  }
}
