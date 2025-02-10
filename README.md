# Angular Testing Jest

## 📌 Sobre o Projeto

Este projeto tem como objetivo demonstrar a implementação de testes unitários em uma aplicação Angular utilizando o framework Jest. Nele, são abordados testes para componentes, pipes, serviços e diretivas, garantindo a qualidade e confiabilidade do código.

## 🚀 Tecnologias Utilizadas
- Angular 17 - Framework principal para o desenvolvimento da aplicação.
- Jest - Framework de testes unitários para JavaScript/TypeScript.
- Node.js 18 - Ambiente de execução para o Angular CLI.
- TypeScript - Linguagem utilizada para desenvolvimento.



## 🛠️ Configuração e Instalação
### 1. Clone este repositório:
```sh
git clone https://github.com/seu-usuario/angular-testing-jest.git
cd angular-testing-jest
```

### 2. Instale as dependências:
```sh
npm install
```

### 2. Execute os testes:
```sh
npm test
```

## 🧪 Implementação dos Testes

### 🔹 Testes de Serviços

Os serviços são testados garantindo que suas funções retornem os valores esperados e utilizem corretamente injeções de dependência.

Exemplo:
```typescript
import { MeuService } from './meu.service';

describe('MeuService', () => {
  let service: MeuService;

  beforeEach(() => {
    service = new MeuService();
  });

  it('deve retornar a soma correta', () => {
    expect(service.somar(2, 3)).toBe(5);
  });
});

```

## 🏗️ Estrutura do Projeto

```graphql
angular-testing-jest/
│── src/
│   ├── app/
│   │   ├── components/
│   │   ├── corre/
│   │   │   ├── services/
|   |   |   |   |────── add-car/
│   │   │   │   |   |   | |──────────── add-car.service.ts
│   │   │   │   |   |   | |──────────── add-car.service.spec.ts
|   |   |   |   |────── search-cars/
│   │   │   │   |   |   | |──────────────── search-cars.service.ts
│   │   │   │   |   |   | |──────────────── search-cars.service.spec.ts
|   |   |   |   |────── update-car/
│   │   │   │   |   |   | |──────────────── update-car.service.ts
│   │   │   │   |   |   | |──────────────── update-car.service.spec.ts
│   │   ├── shared/
│   │   │   ├── interface/
│   │   │   |   | |──────────── i-add-car-request.ts
│   │   │   |   | |──────────── i-search-car-request.ts
│   │   │   |   | |──────────── i-search-car-response.ts
│   ├── assets/
│   │   ├── img/
│   │   ├── mock/
│   │   │   │ ├──────────── m-add-car.mock.ts
│   │   │   │ ├──────────── m-cars-request.mock.ts
│   │   │   │ ├──────────── m-cars-response.mock.ts
│   ├── environments/
│── jest.config.js
│── package.json
│── README.md

```

## 📌 Contribuições

Fique à vontade para abrir issues e pull requests caso tenha sugestões ou melhorias para o projeto!



<h1 align="center">💻 Desenvolvido Por: Gilberto Júnior</h1>

