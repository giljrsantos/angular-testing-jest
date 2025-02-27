import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let router: Router

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve navegar para a tela de busca de carros', () => {
    const spy = jest.spyOn(router, 'navigate');
    component.navigateToSearchCar();
    expect(spy).toHaveBeenCalledWith(['search-car']);
  });

  it('deve navegar para rota adicionar carro', () => {
    const spy = jest.spyOn(router, 'navigate');
    component.navigateToAddCar();
    expect(spy).toHaveBeenCalledWith(['add-car']);
  });

  it('deve navegar para rota atualizar carro', () => {
    const spy = jest.spyOn(router, 'navigate');
    component.navigateToUpdateCar();
    expect(spy).toHaveBeenCalledWith(['update-car']);
  });

  it('deve navegar para rota deletar carro', () => {
    const spy = jest.spyOn(router, 'navigate');
    component.navigateToDeleteCar();
    expect(spy).toHaveBeenCalledWith(['delete-car']);
  });
});
