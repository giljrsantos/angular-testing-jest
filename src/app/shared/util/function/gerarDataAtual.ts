export const gerarDataAtualComHora = () => {
  const dataAtual: string = new Date().toLocaleDateString('pt-BR', {});
  const horaAtual: string = new Date().toLocaleTimeString('pt-BR', {
    hour: '2-digit'
  });
  return `${dataAtual} às ${horaAtual}h`;
  // return 18/03/2025 às 19h
};
