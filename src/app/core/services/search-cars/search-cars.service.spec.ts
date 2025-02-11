import { TestBed } from '@angular/core/testing';

import {
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';

import { throwError } from 'rxjs';
import { SearchCarsService } from './search-cars.service';
import { mockCars } from '../../../../assets/mock/m-cars-response.mock';

describe('SearchCarsService', () => {
  let service: SearchCarsService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SearchCarsService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCarsId', () => {
    it('deve retornar um carro específico ao pesquisar por id usando a API getCars', () => {
      const id = 1;
      service.getCarsId({ id }).subscribe((res) => {
        expect(res).toEqual(mockCars[0]);
      });
    });

    it('deve lidar com erro quando a busca do carro por ID falha', () => {
      const error = new Error('error');
      const id = 1;
      const spy = jest.spyOn(httpClient, 'get');
      spy.mockReturnValueOnce(throwError(() => error));
      service.getCarsId({ id }).subscribe((res) => {
        expect(res).toBeUndefined();
      });
    });
  });

  describe('getCars', () => {
    it('deve retornar um array de carros', () => {
      service.getCars().subscribe((res) => {
        expect(res).toEqual(mockCars);
      });
    });

    it('deve lidar com erro quando buscar um array de carros', () => {
      const error = new Error('error');
      const spy = jest.spyOn(httpClient, 'get');
      spy.mockReturnValueOnce(throwError(() => error));
      service.getCars().subscribe((res) => {
        expect(res).toBeUndefined();
      });
    });

    it('deve lidar com erro 400 (bad request) quando buscar um array de carros', () => {
      const spy = jest.spyOn(httpClient, 'get');
      service.getCars().subscribe({
        next: () => fail('Erro de requisição, Bad Request'),
        error: (error) => expect(error.status).toBe(400),
      });
      expect(spy).toHaveBeenCalled();
    });

    it('deve lidar com erro 500 (Internal Server Error) quando buscar um array de carros', () => {
      const spy = jest.spyOn(httpClient, 'get');
      service.getCars().subscribe({
        next: () => fail('Erro no servidor, Internal Server Error'),
        error: (error) => expect(error.status).toBe(500),
      });
      expect(spy).toHaveBeenCalled();
    });

    it('deve lidar com erro 500 (Internal Server Error) quando buscar um array de carros', () => {
      const spy = jest.spyOn(httpClient, 'get');
      service.getCars().subscribe({
        next: () => fail('Não encontrado, Not Found'),
        error: (error) => expect(error.status).toBe(404),
      });
      expect(spy).toHaveBeenCalled();
    });

  });
});
