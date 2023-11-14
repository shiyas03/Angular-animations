import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  @ViewChild('authorColor') authorRef!: ElementRef

  constructor(private renderer:Renderer2){}

  changeColor(){
    this.renderer.setStyle(this.authorRef.nativeElement,'color','green')
  }
  
}
