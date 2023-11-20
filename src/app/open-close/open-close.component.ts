import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [trigger('openClose', [
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('close', style({
      height: '100px',
      opacity: 0.5,
      backgroundColor: 'green'
    })),
    transition('open=>close', animate('0.5s')),
    transition('close=>open', animate('1s'))
  ])]
})
export class OpenCloseComponent {
  isOpen: boolean = true

  onToggle() {
    this.isOpen = !this.isOpen
  }
}
