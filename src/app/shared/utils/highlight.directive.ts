import {Directive, ElementRef, Input} from '@angular/core';

@Directive(
  {
    selector: '[myHighlight]'
  }
)
export class HighlightDirective {

  private defaultColor: string = 'yellow';
  private colourString: string = '';
  private colourHighlight: boolean = false;

  @Input() myHighlight: string;

  constructor(private el: ElementRef) {
    this.el = el;
  }

  @Input('highlightMe')
  set highlightMe(val: boolean) {
    this.colourHighlight = val;
    if (this.colourHighlight) {
      if (this.colourString) {
        this.el.nativeElement.style.backgroundColor = this.colourString;
      } else {
        this.el.nativeElement.style.backgroundColor = this.defaultColor;
      }
    } else {
      this.el.nativeElement.style.backgroundColor = '';
    }
  }

  @Input('highlightColour')
  set highlightColour(val: string) {
    if (val && this.colourHighlight) {
      this.colourString = val;
      this.el.nativeElement.style.backgroundColor = this.colourString;
    }
  }
}
