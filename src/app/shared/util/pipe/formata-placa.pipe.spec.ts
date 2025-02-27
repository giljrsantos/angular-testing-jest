import { FormataPlacaPipe } from './formata-placa.pipe';

describe('FormataPlacaPipe', () => {
  let pipe: FormataPlacaPipe;
  beforeEach(() => {
    pipe = new FormataPlacaPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('deve retornar a placa formatada', () => {
    const result = pipe.transform('ABC1234');
    expect(result).toBe('ABC-1234');
  });

  it('deve retornar uma string vazia', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });

});
