import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgVotingComponent } from 'ng-voting'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgVotingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
