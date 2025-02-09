import { TestBed } from '@angular/core/testing';
import { AddCarService } from './add-car.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { mockCar } from '../../../../assets/mock/m-add-car.mock';
import { of } from 'rxjs';

describe('AddCarService', () => {
  let service: AddCarService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AddCarService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have addCar function', () => {
    expect(service.addCar).toBeTruthy();
  });

  it('should add car', () => {
    service.addCar(mockCar).subscribe((res) => {
      expect(res).toEqual(mockCar);
    });
  });

  it('should  have addCar function method POST', () => {
    const httpSpy = jest.spyOn(httpClient, 'post').mockReturnValue(of(mockCar));
    service.addCar(mockCar).subscribe(() => {
      expect(httpSpy).toHaveBeenCalledWith('http://localhost:3000/add-car', mockCar);
      expect(httpSpy).toHaveBeenCalledTimes(1);
      expect(httpSpy).toHaveBeenCalled()
    });
  });

  it('should call http post with body car', () => {
    service.addCar(mockCar).subscribe((res) => {
      expect(res).toEqual(mockCar);
    });
  });

});
