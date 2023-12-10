import { Component } from '@angular/core';
import { Course } from './models/course.models';
import { AnimationBuilder, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
}
