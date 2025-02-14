import { Component, inject, OnInit } from '@angular/core';
import { SearchCarsService } from '../../core/services/search-cars/search-cars.service';
import { ISearchCarRequest } from '@app/shared/interface/i-search-car-request';
import { ISearchCarResponse } from '@app/shared/interface/i-search-car-response';

@Component({
  selector: 'app-search-cars',
  standalone: true,
  imports: [],
  templateUrl: './search-cars.component.html',
  styleUrl: './search-cars.component.scss',
})
export class SearchCarsComponent{

  listCars: ISearchCarResponse[] = [];
  oneCar: ISearchCarResponse | undefined;

  private readonly searchCars = inject(SearchCarsService);

  getSearchCars() {
    this.searchCars.getCars().subscribe({
      next: (cars) => {
        this.listCars = cars;
      },
      error: (error) => {},
    });
  }

  getSearchCarById(idCar: ISearchCarRequest) {
    this.searchCars.getCarsId(idCar).subscribe({
      next: (car) => {
        this.oneCar = car;
      },
      error: (error) => {},
    });
  }
}
