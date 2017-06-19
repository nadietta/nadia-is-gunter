import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[color]',
  inputs: ['bgColor', 'colour:color']
})
export class ColorDirective {

  constructor(private el: ElementRef) {
    this.el = el;
  }

  set colour(color: string) {
    this.el.nativeElement.style.color = color;
  }

  set bgColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
