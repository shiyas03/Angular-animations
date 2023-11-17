import { Component, Input } from '@angular/core';
import { Courses } from '../courses/courses.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() course!: Courses
}
