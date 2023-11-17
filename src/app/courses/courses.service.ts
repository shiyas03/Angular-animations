import { Injectable } from "@angular/core";
import { Courses } from "./courses.model";
import { Observable, Observer } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CourseServices {
    courses: Courses[] = [
        { title: 'Angular full course', description: 'learn angular full course', status: 'active' },
        { title: 'JavaScript full course', description: 'learn javaScript full course', status: 'active' },
        { title: 'Html full course', description: 'learn Html full course', status: 'active' }
    ]

    getCourses(): Observable<Courses[]> {
        const coursesObservable = new Observable((observer: Observer<Courses[]>) => {
            setTimeout(() => {
                observer.next(this.courses)
            }, 2000)
        })
        return coursesObservable
    }
} 