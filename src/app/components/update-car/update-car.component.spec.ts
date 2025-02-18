import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarComponent } from './update-car.component';
import { HttpClient } from '@angular/common/http';
import { UpdateCarService } from '../../core/services/update-car/update-car.service';
import { mockUpdateCar } from '../../../assets/mock/m-update-car.mock';
import { of, throwError } from 'rxjs';

describe('UpdateCarComponent', () => {
  let component: UpdateCarComponent;
  let fixture: ComponentFixture<UpdateCarComponent>;
  let httpClientMock: jest.Mocked<HttpClient>;
  let serviceUpdateCar: jest.Mocked<UpdateCarService>;

  beforeEach(async () => {

    const serviceUpdateCarMock = {
      updateCar: jest.fn(),
    };

    httpClientMock = {
      put: jest.fn()
    } as any;


    await TestBed.configureTestingModule({
      imports: [UpdateCarComponent],
      providers: [
        UpdateCarService,
        {
          provide: UpdateCarService,
          useValue: serviceUpdateCarMock,
        },
        {
          provide: HttpClient,
          useValue: httpClientMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCarComponent);
    component = fixture.componentInstance;
    serviceUpdateCar = TestBed.inject(UpdateCarService) as jest.Mocked<UpdateCarService>;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updateCar', () => {

    it('deve atualizar o carro e retornar o carro atualizado', () => {
      const bodyCar = mockUpdateCar;
      serviceUpdateCar.updateCar.mockReturnValue(of(bodyCar));
      component.putCar(bodyCar);
      expect(component.carUpdate).toBe(true);
      expect(component.updateCar).toEqual(bodyCar);
    });

    it('deve lidar com erro no momento de atualizar o carro', () => {
      const error =  new Error('Error');
      const bodyCar = mockUpdateCar;
      serviceUpdateCar.updateCar.mockReturnValue(throwError(() => error));
      component.putCar(bodyCar);
      expect(component.carUpdate).toBe(false);
      expect(component.updateCar).toBeUndefined()
    });

  });


});
