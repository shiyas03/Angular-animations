import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';
import { AnimationComponent } from './animation/animation.component';
import { OpenCloseComponent } from './open-close/open-close.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'animations', component: AnimationComponent },
  { path: 'open', component: OpenCloseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
