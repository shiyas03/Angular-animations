import { Component } from '@angular/core';
import { conditionAnimation } from './conditionalAnimation';

@Component({
  selector: 'app-void-animation',
  templateUrl: './void-animation.component.html',
  styleUrls: ['./void-animation.component.css'],
  animations: [conditionAnimation]
})
export class VoidAnimationComponent {
  toggleContent: boolean = false

  showContent() {
    this.toggleContent = !this.toggleContent
  }
}
