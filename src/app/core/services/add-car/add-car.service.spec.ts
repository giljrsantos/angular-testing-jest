import { TestBed } from '@angular/core/testing';
import { AddCarService } from './add-car.service';
import {
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';

import { of, throwError } from 'rxjs';
import { mockCar } from '../../../../assets/mock/m-add-car.mock';

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

  it('deve criar', () => {
    expect(service).toBeTruthy();
  });

  it('deve chamar a função addCar()', () => {
    expect(service.addCar).toBeTruthy();
  });

  it('deve adicionar um carro', () => {
    service.addCar(mockCar).subscribe((res) => {
      expect(res).toEqual(mockCar);
    });
  });

  it('deve chamar o método de função addCar() POST', () => {
    const httpSpy = jest
      .spyOn(httpClient, 'post')
      .mockReturnValue(of({}));
    service.addCar(mockCar).subscribe(() => {
      expect(httpSpy).toHaveBeenCalledWith(
        'http://localhost:3000/add-car',
        mockCar,
      );
      expect(httpSpy).toHaveBeenCalledTimes(1);
      expect(httpSpy).toHaveBeenCalled();
    });
  });

  it('deve chamar http post para adicionar os dados do carro', () => {
    jest.spyOn(httpClient, 'post');
    service.addCar(mockCar).subscribe((res) => {
      expect(res).toEqual(mockCar);
    });
  });

  it('deve lidar com erro quando adicionar carro falhar', () => {
    const error = new Error('error');
    const spy = jest.spyOn(httpClient, 'post');
    spy.mockReturnValueOnce(throwError(() => error));
    service.addCar(mockCar).subscribe((res) => {
      expect(res).toBeUndefined();
    });
  });
});
