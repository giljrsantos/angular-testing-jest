import { TestBed } from '@angular/core/testing';

import { DeleteCarService } from './delete-car.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('DeleteCarService', () => {
  let service: DeleteCarService;
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(DeleteCarService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
