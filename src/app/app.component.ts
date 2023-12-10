import { Component } from '@angular/core';
import { Course } from './models/course.models';
import { AnimationBuilder, animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeState', [
      transition('* => *', [
        group([
          query(':enter', [
            animateChild(),
            style({
              opacity: 0,
              transform: 'translateY(-100%)'
            }),
            animate(500)
          ], { optional: true }),
          query(':leave', [
            animate(500,
              style({
                opacity: 0,
                transform: 'translateY(100%)'
              }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {

  divSelected: boolean = false
  moveSelected: boolean = false
  onColorChange() {
    this.divSelected = true
  }

  courses: Course[] = [
    { title: 'Angular complete course', isActive: false },
    { title: 'Angular testing course', isActive: false },
    { title: 'Angular animations course', isActive: false }
  ]
  title = 'angular-animation';

  constructor(private builder: AnimationBuilder) { }

  animate(elemnt: HTMLElement) {
    const animation = this.builder.build([
      style({
        backgroundColor: 'blue',
        width: '200px'
      }),
      animate(500, style({
        backgroundColor: 'red',
        width: '500px'
      })),
      animate(500)
    ])
    const player = animation.create(elemnt)
    player.play()
  }

  getAnimationData(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData['animation']
    if (!routeData) {
      return 'homePage'
    }
    return routeData
  }
}
