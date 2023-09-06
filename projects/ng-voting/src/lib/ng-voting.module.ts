import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgVotingComponent } from './ng-voting.component';

@NgModule({
  declarations: [
    NgVotingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgVotingComponent
  ]
})
export class NgVotingModule { }
