import { TestBed } from '@angular/core/testing';

import { NgVotingService } from './ng-voting.service';

describe('NgVotingService', () => {
  let service: NgVotingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgVotingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
