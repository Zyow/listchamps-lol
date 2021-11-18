import { TestBed } from '@angular/core/testing';

import { ListchampService } from './listchamp.service';

describe('ListchampService', () => {
  let service: ListchampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListchampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
