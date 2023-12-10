import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';
import { AnimationComponent } from './animation/animation.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { VoidAnimationComponent } from './void-animation/void-animation.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', component: CoursesComponent, data: { animation: 'homePage' } },
  { path: 'users', component: UsersComponent, data: { animation: 'userPage' } },
  { path: 'animations', component: AnimationComponent },
  { path: 'open', component: OpenCloseComponent },
  { path: 'void', component: VoidAnimationComponent },
  { path: 'card', component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
