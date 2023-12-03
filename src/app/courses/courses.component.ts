import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from './courses.model';
import { CourseServices } from './courses.service';
import { triggerState } from './animation';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations: [triggerState]
})
export class CoursesComponent implements OnInit {

  courses!: Courses[]
  selectedCourse!: number;
  coursesLoaded: boolean = false
  createClicked: boolean = false

  constructor(private courseServices: CourseServices) { }

  ngOnInit(): void {
    this.courseServices.getCourses().subscribe((courses) => {
      this.courses = courses
      this.coursesLoaded = true
    })
  }

  onStatusUpdate(event: string, index: number) {
    this.courses[index].status = event
  }

  onDeleteCourse(index: number) {
    this.courses.splice(index, 1)
  }

  onCourseSelected(index: number) {
    this.selectedCourse = index
  }

  onCreateClick() {
    this.createClicked = !this.createClicked
  }
}
