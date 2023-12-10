import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Courses } from '../courses/courses.model';
import { buttonTrigger, courseFormState } from './animate';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
  animations: [buttonTrigger, courseFormState]
})
export class NewCourseComponent {

  @Output() courseCreated = new EventEmitter<Courses>()
  @Output() courseCancel = new EventEmitter()

  courseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  })

  statuses = ['active', 'inActive', 'draft']

  onCourseCreate() {
    this.courseCreated.emit(this.courseForm.value as Courses)
  }

  onCancelCourse() {
    this.courseCancel.emit()
  }
}
