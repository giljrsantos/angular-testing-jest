import { TestBed } from '@angular/core/testing';

import { UpdateCarService } from './update-car.service';

describe('UpdateCarService', () => {
  let service: UpdateCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
