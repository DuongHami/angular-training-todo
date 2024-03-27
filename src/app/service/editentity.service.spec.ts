import { TestBed } from '@angular/core/testing';

import { EditentityService } from './editentity.service';

describe('EditentityService', () => {
  let service: EditentityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditentityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
