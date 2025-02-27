import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchCarsComponent } from './components/search-cars/search-cars.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { DeleteCarComponent } from './components/delete-car/delete-car.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'search-car',
    component: SearchCarsComponent
  },
  {
    path: 'add-car',
    component: AddCarComponent
  },
  {
    path: 'update-car',
    component: UpdateCarComponent
  },
  {
    path: 'delete-car',
    component: DeleteCarComponent
  }
];
