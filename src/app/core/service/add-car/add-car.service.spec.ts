import { TestBed } from '@angular/core/testing';

import { AddCarService } from './add-car.service';
import { HttpClientModule } from '@angular/common/http';

describe('AddCarService', () => {
  let service: AddCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AddCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
