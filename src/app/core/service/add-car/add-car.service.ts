import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddCarService {

  private readonly urlBff = 'http://localhost:3000/add-car'
  constructor(
    private http: HttpClient
  ) { }
}
