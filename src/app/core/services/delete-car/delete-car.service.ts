import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeleteCarService {
  private readonly urlBff =
    'http://localhost:3000/delete-car';

  constructor(private httpClient: HttpClient) {}

  deleteCar(id: number) {
    const url = `${this.urlBff}/${id}`;
    return this.httpClient.delete(url);
  }
}
