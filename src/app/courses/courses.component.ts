import { Component, OnInit } from '@angular/core';
import { Courses } from './courses.model';
import { CourseServices } from './courses.service';
import { curseAddState, triggerState } from './animation';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations: [triggerState, curseAddState]
})
export class CoursesComponent implements OnInit {

  courses!: Courses[]
  diaplayedCourses: Courses[] = []
  selectedCourse!: number;
  coursesLoaded: boolean = false
  createClicked: boolean = false

  constructor(private courseServices: CourseServices) { }

  ngOnInit(): void {
    this.courseServices.getCourses().subscribe((courses) => {
      this.courses = courses
      this.coursesLoaded = true
      this.diaplayedCourses.push(this.courses[0])
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

  courseCreated(event: Courses) {
    this.courses.unshift(event)
    this.createClicked = false
  }

  courseCanceled() {
    this.createClicked = false
  }

  onCourseAddDone(event: AnimationEvent, i: number) {
    console.log("working");
    
    if (event.fromState !== 'void') {
      return
    }

    if (this.courses.length > i + 1) {
      this.diaplayedCourses.push(this.courses[i + 1])
    } else {
      this.diaplayedCourses = this.courses
    }
  }
}
