import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from './courses.model';
import { CourseServices } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses!: Courses[]

  constructor(private courseServices:CourseServices){}

  ngOnInit(): void {
    this.courseServices.getCourses().subscribe((courses)=>{
      this.courses = courses
    })
  }
}
