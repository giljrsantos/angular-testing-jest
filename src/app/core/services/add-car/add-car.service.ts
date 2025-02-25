import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddCarRequest } from '../../../shared/interface/i-add-car-request';
import { ISearchCarResponse } from '../../../shared/interface/i-search-car-response';

@Injectable({
  providedIn: 'root',
})
export class AddCarService {
  private readonly urlBff = 'http://localhost:3000/add-car';
  constructor(private http: HttpClient) {}

  addCar(bodyCar: IAddCarRequest) {
    const url = `${this.urlBff}`;
    return this.http.post<ISearchCarResponse>(
      this.urlBff,
      bodyCar,
    );
  }
}
