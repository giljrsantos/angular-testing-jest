import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICarResponse } from '../../../shared/interface/i-search-car-response';
import { ICarRequest } from '../../../shared/interface/i-search-car-request';


@Injectable({
  providedIn: 'root'
})
export class SearchCarsService {

  private readonly urlBff = 'http://localhost:3000/cars';

  constructor(
    private http: HttpClient
  ) { }

  getCarsId(req: ICarRequest) {
    const url = `${this.urlBff}/cars/search/${req.id}`;
    return this.http.get<ICarResponse>(url);
  }

  getCars() {
    const url = `${this.urlBff}/cars`;
    return this.http.get<ICarResponse[]>(url);
  }
}
