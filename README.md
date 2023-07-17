# What I learned
[ngClass]
use CSS class as key, then boolean value follows
if true, will apply CSS accordingly

[ngStyle]
similar as ngClass, use boolean to determine when 
to apply CSS
different from ngClass, define the inline style in
the value

### Custom Attribute Directive
#### Basic
- create directive ts
- use @Directive annotation
    - add a selector with [] as attribute
    - inject elementRef to manipulate element's style
- apply the selector as an attribute to the element within 
  the template where you need the style
#### Enhanced --Renderer
- the above is not best practice
- inject Renderer to manipulate the DOM, as the DOM service might 
  not always avaliable
#### Enhanced --Hostlistener
- to listen to events that is on the element
- Use HostBinding annotation to bind the property 
  needed
    - create instance that need to bind @HostBinding('style.backgroundColor') backgroundColor:string
    - Use the instance with the HostListner
