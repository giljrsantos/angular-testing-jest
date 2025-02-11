import { TestBed } from '@angular/core/testing';

import { DeleteCarService } from './delete-car.service';
import {
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('DeleteCarService', () => {
  let service: DeleteCarService;
  let httpClient: HttpClient;

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

  it('delete car with id', () => {
    const id: number = 1;
    jest.spyOn(httpClient, 'delete');
    service.deleteCar(id).subscribe(() => {
      expect(service).toHaveBeenCalled();
    });
  });

  it('deve chamar o método de função deleteCar() DELETE na URL correta', () => {
    const id: number = 1;
    const httpClientSpy = jest
      .spyOn(httpClient, 'delete')
      .mockReturnValue(of({}));

    service.deleteCar(id).subscribe(() => {
      expect(httpClientSpy).toHaveBeenCalledWith([
        `http://localhost:3000/delete-car/${id}`,
      ]);
      expect(httpClientSpy).toHaveBeenCalledTimes(1);
      expect(httpClientSpy).toHaveBeenCalled();
    });
  });

  it('deve lidar com erro', () => {
    const id: number = 1;
    const error = new Error('Erro ao deletar carro');
    const httpClientSpy = jest
      .spyOn(httpClient, 'delete')
      .mockReturnValueOnce(throwError(() => error));

    service.deleteCar(id).subscribe(() => {
      expect(httpClientSpy).toBeDefined();
    });
  });
});
