import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { mockCars } from '../../../assets/mock/m-cars-response.mock';
import { AddCarService } from '../../core/services/add-car/add-car.service';
import { AddCarComponent } from './add-car.component';

describe('AddCarComponent', () => {
  let component: AddCarComponent;
  let fixture: ComponentFixture<AddCarComponent>;
  let httpClientMock: jest.Mocked<HttpClient>;
  let serviceAddCar: jest.Mocked<AddCarService>;

  beforeEach(async () => {
    const serviceAddCarMock = {
      addCar: jest.fn(),
    };

    httpClientMock = {
      post: jest.fn(),
    } as any;

    await TestBed.configureTestingModule({
      imports: [AddCarComponent, HttpClientTestingModule],
      providers: [
        AddCarService,
        {
          provide: AddCarService,
          useValue: serviceAddCarMock,
        },
        {
          provide: HttpClient,
          useValue: httpClientMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCarComponent);
    component = fixture.componentInstance;
    serviceAddCar = TestBed.inject(
      AddCarService,
    ) as jest.Mocked<AddCarService>;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('postAddCar()', () => {
    it('deve retornar o carro que foi cadastrado', () => {
      serviceAddCar.addCar.mockReturnValue(of(mockCars[0]));
      component.postAddCar(mockCars[0]);
      expect(component.cadastrado).toBe(true);
      expect(component.oneCar).toEqual(mockCars[0]);
    });

    it('deve lidar com erro ao chamar postAddCar()', () => {
      const mockError = new Error('error');
      serviceAddCar.addCar.mockReturnValue(
        throwError(() => mockError),
      );
      component.postAddCar(mockCars[0]);
      expect(component.cadastrado).toBe(false);
      expect(component.oneCar).toBeUndefined();
    });
  });
});
