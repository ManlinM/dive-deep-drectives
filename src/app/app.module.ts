import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlighDirective } from './directives/basic/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better/better-highlight.directive';
import { UnlessDirective } from './directives/unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlighDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
