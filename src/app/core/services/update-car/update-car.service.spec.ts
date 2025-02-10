import { TestBed } from '@angular/core/testing';

import { UpdateCarService } from './update-car.service';
import {
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { mockCar } from '../../../../assets/mock/m-add-car.mock'
import { mockCarsRequest } from '../../../../assets/mock/m-cars-request.mock';

describe('UpdateCarService', () => {
  let service: UpdateCarService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(UpdateCarService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('deve criar a service', () => {
    expect(service).toBeTruthy();
  });

  it('deve atualizar um carro com um id', () => {
    service.updateCar(mockCar).subscribe((res) => {
      expect(res).toEqual(mockCar);
    });
  });

  it('deve chamar http put para atualizar os dados do carro', () => {
    jest.spyOn(httpClient, 'put');
    service.updateCar(mockCar).subscribe((res) => {
      expect(res).toEqual(mockCar);
    });
  });

  it('deve chamar o método de função updateCar() PUT', () => {
    const httpSpy = jest
      .spyOn(httpClient, 'put')
      .mockReturnValue(of({}));
    service.updateCar(mockCar).subscribe(() => {
      expect(httpSpy).toHaveBeenCalledWith(
        'http://localhost:3000/update-car',
        mockCarsRequest,
      );
      expect(httpSpy).toHaveBeenCalledTimes(1);
      expect(httpSpy).toHaveBeenCalled();
    });
  });

  it('deve lidar com erro ao atualizar um carro', () => {
    const error = new Error('error');
    const spy = jest.spyOn(httpClient, 'put');
    spy.mockReturnValueOnce(throwError(() => error));
    service.updateCar(mockCar).subscribe((res) => {
      expect(res).toBeUndefined();
    });
  });
});
