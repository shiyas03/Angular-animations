import { Component, HostBinding } from '@angular/core';
import { routeAnimationState, routerSlideAnimationState } from '../shared/router.animation';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routeAnimationState({ opacity: 0, duration: '2000ms' }), routerSlideAnimationState]
})
export class UsersComponent {
  @HostBinding('@routeAnimationTrigger') routerAnimation = true
}
