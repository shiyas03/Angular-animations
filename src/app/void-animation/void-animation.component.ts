import { Component } from '@angular/core';
import { conditionAnimation, listAnimation, shrinkAnimation } from './conditionalAnimation';

@Component({
  selector: 'app-void-animation',
  templateUrl: './void-animation.component.html',
  styleUrls: ['./void-animation.component.css'],
  animations: [conditionAnimation, shrinkAnimation, listAnimation]
})
export class VoidAnimationComponent {
  toggleContent: boolean = false
  animate: boolean = false
  width: number = 400
  listData: number[] = []

  showContent() {
    this.toggleContent = !this.toggleContent
  }

  onAddElement() {
    this.listData.push(Math.random())
  }
}
