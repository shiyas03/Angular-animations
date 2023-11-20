import { trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[trigger('clickedState',[])]
})
export class AnimationComponent {

}
