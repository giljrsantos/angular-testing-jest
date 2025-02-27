import { gerarDataAtualComHora } from "./gerarDataAtual";

describe('gerarDataAtual', () => {

  it('deve retornar a data atual', () => {
    const dataAtual: string = new Date().toLocaleDateString('pt-BR', {});
    const horaAtual: string = new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit'
    });
    const result = `${dataAtual} às ${horaAtual}h`;
    const dataHoraAtual = gerarDataAtualComHora();
    expect(result).toBe(dataHoraAtual);
    expect(result).toBeTruthy()
  });

});
