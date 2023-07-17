import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  /**customize attribute directives
   * binding it to its parent
   */
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'transparent';

  /***
   * defining a property for HostListener
   */
  @HostBinding('style.backgroundColor') 
  backgroundColor: string =this.defaultColor;
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }
  ngOnInit(){
  //  this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
  }
  /**
   * 
   * Reactive Directive
   */
  // the 'moseenter' and 'mouseleave' are built-in with HostListener
  @HostListener('mouseenter') mouseover(){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent')
    this.backgroundColor=this.defaultColor;
  }

  
}

