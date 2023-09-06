import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgVotingComponent } from './ng-voting.component';

describe('NgVotingComponent', () => {
  let component: NgVotingComponent;
  let fixture: ComponentFixture<NgVotingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgVotingComponent]
    });
    fixture = TestBed.createComponent(NgVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
