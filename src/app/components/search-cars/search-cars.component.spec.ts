import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { mockCars } from '../../../assets/mock/m-cars-response.mock';
import { SearchCarsService } from '../../core/services/search-cars/search-cars.service';
import { SearchCarsComponent } from './search-cars.component';

describe('SearchCarsComponent', () => {
  let component: SearchCarsComponent;
  let httpClient: HttpClient;
  let fixture: ComponentFixture<SearchCarsComponent>;
  let serviceCars: jest.Mocked<SearchCarsService>;

  beforeEach(async () => {
    const serviveCarsMock = {
      getCars: jest.fn(),
      getCarsId: jest.fn(),
    };
    await TestBed.configureTestingModule({
      imports: [
        SearchCarsComponent,
        HttpClientTestingModule,
      ],
      providers: [
        SearchCarsService,
        {
          provide: SearchCarsService,
          useValue: serviveCarsMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCarsComponent);
    component = fixture.componentInstance;
    httpClient = TestBed.inject(HttpClient);
    serviceCars = TestBed.inject(
      SearchCarsService,
    ) as jest.Mocked<SearchCarsService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getSearchCars', () => {
    it('deve retornar uma lista de carros ao chamar getSearchCars()', () => {
      serviceCars.getCars.mockReturnValue(of(mockCars));
      component.getSearchCars();
      expect(component.listCars).toEqual(mockCars);
    });

    it('deve lidar com erro ao chamar getSearchCars()', () => {
      const mockError = new Error('error');
      serviceCars.getCars.mockReturnValue(
        throwError(() => mockError),
      );
      component.getSearchCars();
      expect(component.listCars).toEqual([]);
      expect(component.listCars.length).toBe(0);
      expect(component.listCars).toStrictEqual([]);
    });
  });

  describe('getSearchCarById', () => {
    it('deve retornar um carro ao chamar getSearchCarById()', () => {
      const id = 1;
      serviceCars.getCarsId.mockReturnValue(
        of(mockCars[0]),
      );
      component.getSearchCarById({ id });
      expect(component.oneCar).toEqual(mockCars[0]);
    });

    it('deve lidar com erro ao chamar getSearchCarById()', () => {
      const mockError = new Error('error');
      const id = 1;
      serviceCars.getCarsId.mockReturnValue(
        throwError(() => mockError),
      );
      component.getSearchCarById({ id });
      expect(component.oneCar).toBeUndefined();
    });
  });
});
