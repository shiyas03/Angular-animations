import { Component } from '@angular/core';
import { conditionAnimation, shrinkAnimation } from './conditionalAnimation';

@Component({
  selector: 'app-void-animation',
  templateUrl: './void-animation.component.html',
  styleUrls: ['./void-animation.component.css'],
  animations: [conditionAnimation, shrinkAnimation]
})
export class VoidAnimationComponent {
  toggleContent: boolean = false
  animate: boolean = false
  width: number = 400

  showContent() {
    this.toggleContent = !this.toggleContent
  }
}
