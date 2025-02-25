import { Component, inject, OnInit } from '@angular/core';
import { SearchCarsService } from '../../core/services/search-cars/search-cars.service';
import { ISearchCarResponse } from '../../shared/interface/i-search-car-response';
import { ISearchCarRequest } from '../../shared/interface/i-search-car-request';

@Component({
  selector: 'app-search-cars',
  standalone: true,
  imports: [],
  templateUrl: './search-cars.component.html',
  styleUrl: './search-cars.component.scss',
})
export class SearchCarsComponent {
  listCars: ISearchCarResponse[] = [];
  oneCar: ISearchCarResponse | undefined;

  private readonly searchCars = inject(SearchCarsService);

  /**
   * Busca todos os carros na API e preenche a lista de carros.
   *
   * @returns void
   */
  getSearchCars() {
    this.searchCars.getCars().subscribe({
      next: (cars) => {
        this.listCars = cars;
      },
      error: (error) => {},
    });
  }

  /**
   * Busca os detalhes de um carro pelo seu ID..
   *
   * @param idCar - O objeto de solicitação contendo o ID do carro a ser pesquisado.
   * @returns void
   */
  getSearchCarById(idCar: ISearchCarRequest) {
    this.searchCars.getCarsId(idCar).subscribe({
      next: (car) => {
        this.oneCar = car;
      },
      error: (error) => {},
    });
  }
}
