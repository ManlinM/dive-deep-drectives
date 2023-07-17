import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlighDirective implements OnInit{
   constructor(private elementRef:ElementRef){
    elementRef.nativeElement
   }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor ='green';
    }
}