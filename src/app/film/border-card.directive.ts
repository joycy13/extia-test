import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private initalColor: string = '#FCCCCE';
  private defaultColor: string = '#EE6E73';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.defaultColor)
  }

  @Input('titleBorderCard') borderColor: string = ''

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.initalColor);
  }

  @HostListener ('mouseleave') onMouseLeave() {
    this.setBorder(this.borderColor || this.defaultColor)
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = 'solid 4x' + color;
  }

}
