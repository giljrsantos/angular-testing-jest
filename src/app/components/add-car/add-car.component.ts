import { Component, inject } from '@angular/core';
import { AddCarService } from '../../core/services/add-car/add-car.service';
import { IAddCarRequest } from '@shared/interface/i-add-car-request';
import { ISearchCarResponse } from '@shared/interface/i-search-car-response';
import { mockCars } from '@assets/mock/m-cars-response.mock';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.scss'
})
export class AddCarComponent {

  cadastrado: boolean = false;
  oneCar: ISearchCarResponse | undefined;

  private readonly addCarService = inject(AddCarService);

  postAddCar(bodyCar: IAddCarRequest) {

    this.addCarService.addCar(bodyCar).subscribe({
      next: (res) => {
        this.oneCar = res;
        this.cadastrado = true;
      },
      error: (error) => {
        this.cadastrado = false;
      }
    });

  }

}
