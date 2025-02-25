import { IUpdateCarRequest } from "../../app/shared/interface/i-update-car-request";


export const mockUpdateCar: IUpdateCarRequest = {
  id: 1,
  brand: 'Volkswagen',
  model: 'Golf',
  year: 2021,
  color: 'black',
  price: 10000,
  img: 'https://www.volkswagen.es/content/dam/vw-ngw/international-cars/golf-8/teaser/golf-8-teaser-1920x1080.jpg',
  description: `The Volkswagen Golf is a compact car produced by the German automotive manufacturer Volkswagen since 1974,
  marketed worldwide across eight generations, in various body configurations and under various nameplates –
  including as the Volkswagen Rabbit in the United States and Canada (Mk1 and Mk5), and as the Volkswagen Caribe in Mexico (Mk1).`,
};
