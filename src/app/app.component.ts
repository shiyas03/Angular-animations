import { Component } from '@angular/core';
import { Course } from './models/course.models';

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
}
