import { Directive, ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective{

  constructor(private elem: ElementRef) {
    
   }
   ngOnInit(){
    (this.elem.nativeElement as HTMLElement).style.backgroundColor = "aliceblue";
   }


}
