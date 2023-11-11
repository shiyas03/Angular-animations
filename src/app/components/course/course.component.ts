import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course.models';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() course!: Course
}
