import { Component, inject } from '@angular/core';
import { UpdateCarService } from '../../core/services/update-car/update-car.service';
import { IUpdateCarRequest } from '../../shared/interface/i-update-car-request';

@Component({
  selector: 'app-update-car',
  standalone: true,
  imports: [],
  templateUrl: './update-car.component.html',
  styleUrl: './update-car.component.scss'
})
export class UpdateCarComponent {

  private readonly updateCarService = inject(UpdateCarService)

  updateCar: IUpdateCarRequest | undefined;
  carUpdate: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  putCar(bodyCar: IUpdateCarRequest) {

    this.updateCarService.updateCar(bodyCar).subscribe({
      next: (res) => {
        this.updateCar = res;
        this.carUpdate = true;
      },
      error: (error) => {
        this.carUpdate = false;
      }
    });
  }

}
