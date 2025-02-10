import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISearchCarRequest } from '@app/shared/interface/i-search-car-request';
import { ISearchCarResponse } from '@app/shared/interface/i-search-car-response';

@Injectable({
  providedIn: 'root',
})
export class SearchCarsService {
  private readonly urlBff = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) {}

  getCarsId(req: ISearchCarRequest) {
    const url = `${this.urlBff}/cars/search/${req.id}`;
    return this.http.get<ISearchCarResponse>(url);
  }

  getCars() {
    const url = `${this.urlBff}/cars`;
    return this.http.get<ISearchCarResponse[]>(url);
  }
}
