import { Component, HostBinding } from '@angular/core';
import { routeAnimationState, routerSlideAnimationState } from '../shared/router.animation';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routeAnimationState,routerSlideAnimationState]
})
export class UsersComponent {
  @HostBinding('@routerSlideAnimationTrigger') routerAnimation = true
}
