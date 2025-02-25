import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUpdateCarRequest } from '../../../shared/interface/i-update-car-request';
import { ISearchCarResponse } from '../../../shared/interface/i-search-car-response';


@Injectable({
  providedIn: 'root',
})
export class UpdateCarService {
  private readonly urlBff =
    'http://localhost:3000/update-car';
  constructor(private http: HttpClient) {}

  updateCar(bodyUpdateCar: IUpdateCarRequest) {
    const url = `${this.urlBff}/${bodyUpdateCar.id}`;
    return this.http.put<ISearchCarResponse>(
      url,
      bodyUpdateCar,
    );
  }
}
