import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Courses } from '../courses/courses.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  @Input() course!: Courses
  @ViewChild('statusRef') statusRef!: ElementRef<HTMLSelectElement>
  @Output() statusUpdated = new EventEmitter<string>()
  @Output() courseDelete = new EventEmitter()

  onstatusChange(){
    const selectedValue = this.statusRef.nativeElement.value
    this.statusUpdated.emit(selectedValue)
  }

  onDelete(){
    this.courseDelete.emit()
  }
}
