import { Component, inject, OnInit } from '@angular/core';
import { DeleteCarService } from '../../core/services/delete-car/delete-car.service';

@Component({
  selector: 'app-delete-car',
  standalone: true,
  imports: [],
  templateUrl: './delete-car.component.html',
  styleUrl: './delete-car.component.scss',
})
export class DeleteCarComponent implements OnInit {
  carDelete: boolean = false;

  private readonly deleteCarService = inject(
    DeleteCarService,
  );

  ngOnInit(): void {}

  deleteCar(id: number) {
    this.deleteCarService.deleteCar(id).subscribe({
      next: () => {
        this.carDelete = true;
      },
      error: (error) => {
        this.carDelete = false;
      },
    });
  }
}
