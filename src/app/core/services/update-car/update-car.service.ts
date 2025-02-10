import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddCarRequest } from '@app/shared/interface/i-add-car-request';
import { ISearchCarResponse } from '@app/shared/interface/i-search-car-response';

@Injectable({
  providedIn: 'root',
})
export class UpdateCarService {
  private readonly urlBff =
    'http://localhost:3000/update-car';
  constructor(private http: HttpClient) {}

  updateCar(bodyUpdateCar: IAddCarRequest) {
    const url = `${this.urlBff}`;
    return this.http.put<ISearchCarResponse>(
      url,
      bodyUpdateCar,
    );
  }
}
