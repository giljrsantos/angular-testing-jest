import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchCarsComponent } from './components/search-cars/search-cars.component';

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
    path: 'search-cars',
    component: SearchCarsComponent
  }
];
