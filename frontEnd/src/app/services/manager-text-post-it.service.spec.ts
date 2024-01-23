import { TestBed } from '@angular/core/testing';

import { ManagerTextPostItService } from './manager-text-post-it.service';

describe('ManagerTextPostItService', () => {
  let service: ManagerTextPostItService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerTextPostItService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
