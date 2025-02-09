import { ICarResponse } from "../../app/shared/interface/i-search-car-response";

export const mockCars: ICarResponse[] = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    year: 2024,
    color: 'Prata',
    price: 120000,
    img: 'https://example.com/corolla.jpg',
    description: 'Sedan médio com excelente custo-benefício e baixo consumo de combustível.'
  },
  {
    id: 2,
    brand: 'Honda',
    model: 'Civic',
    year: 2023,
    color: 'Preto',
    price: 135000,
    img: 'https://example.com/civic.jpg',
    description: 'Sedan esportivo com design moderno e ótimo desempenho.'
  },
  {
    id: 3,
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2024,
    color: 'Branco',
    price: 150000,
    img: 'https://example.com/golf.jpg',
    description: 'Hatchback premium com acabamento refinado e tecnologia de ponta.'
  },
  {
    id: 4,
    brand: 'BMW',
    model: 'X3',
    year: 2024,
    color: 'Azul',
    price: 380000,
    img: 'https://example.com/x3.jpg',
    description: 'SUV de luxo com alto desempenho e máximo conforto.'
  },
  {
    id: 5,
    brand: 'Mercedes-Benz',
    model: 'C200',
    year: 2024,
    color: 'Cinza',
    price: 350000,
    img: 'https://example.com/c200.jpg',
    description: 'Sedan executivo com luxo, conforto e tecnologia de última geração.'
  }
];
