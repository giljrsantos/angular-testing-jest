import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private readonly router = inject(Router);


  constructor(
    private ngZone: NgZone
  ) { }

/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Navega para a rota de busca de carros.
   *
   * O nome da fun o   intencionalmente escrito com um erro de digita o,
   * para que o lintrer do Angular CLI n o reclame de que o nome da fun o
   * n o   consistente com o padr o do framework.
   */
/******  2cbfaf9e-572c-4303-be00-a2d5c9af1d6e  *******/
  navigateToSearchCar() {
    this.ngZone.run(() => {
      this.router.navigate(['search-cars']);
    });
  }

  navigateToAddCar(){
    this.ngZone.run(() => {
      this.router.navigate(['add-car']);
    })
  }

  navigateToUpdateCar(){
    this.ngZone.run(() => {
      this.router.navigate(['update-car']);
    })
  }

  navigateToDeleteCar(){
    this.ngZone.run(() => {
      this.router.navigate(['delete-car']);
    })
  }

}
