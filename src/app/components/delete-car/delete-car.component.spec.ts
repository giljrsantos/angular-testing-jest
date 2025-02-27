import { ComponentFixture,  TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { DeleteCarService } from '../../core/services/delete-car/delete-car.service';
import { DeleteCarComponent } from './delete-car.component';

describe('DeleteCarComponent', () => {
  let component: DeleteCarComponent;
  let fixture: ComponentFixture<DeleteCarComponent>;
  let serviceDeleteCar: jest.Mocked<DeleteCarService>;

  beforeEach(async () => {
    const serviceDeleteCarMock = {
      deleteCar: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [DeleteCarComponent],
      providers: [
        DeleteCarService,
        {
          provide: DeleteCarService,
          useValue: serviceDeleteCarMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteCarComponent);
    component = fixture.componentInstance;
    serviceDeleteCar = TestBed.inject(
      DeleteCarService,
    ) as jest.Mocked<DeleteCarService>;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('deleteCar()', () => {
    it('deve deletar o carro com o id informado', () => {
      const id: number = 1;
      jest.spyOn(serviceDeleteCar, 'deleteCar');
      serviceDeleteCar.deleteCar.mockReturnValue(of({}));
      component.deleteCar(id);
      expect(
        serviceDeleteCar.deleteCar,
      ).toHaveBeenCalledWith(id);
      expect(component.carDelete).toBe(true);
    });

    it('deve lidar com erro ao deletar o carro', () => {
      const id: number = 1;
      const mockError = new Error('error');
      serviceDeleteCar.deleteCar.mockReturnValue(
        throwError(() => mockError),
      );
      component.deleteCar(id);
      expect(component.carDelete).toBe(false);
    });
  });
});
