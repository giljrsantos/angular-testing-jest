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
// user.service.ts
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUser() {
    return { id: 1, name: 'John Doe' };
  }
}

// user.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar um usuário com id e nome', () => {
    const user = service.getUser();
    expect(user).toEqual({ id: 1, name: 'John Doe' });
  });
});


```
### 📌 Testando um Componente

Testes unitários de componentes, garantem o correto funcionamento individual de cada componente, facilitando a detecção de erros e a manutenção do código.

Exemplo:
```ts
// hello.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: `<h1>{{ message }}</h1>`,
})
export class HelloComponent {
  message = 'Hello, Angular!';
}

// hello.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HelloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir a mensagem "Hello, Angular!"', () => {    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Angular!');
  });
});


```

## 🏗️ Estrutura do Projeto

```graphql
angular-testing-jest/
│── src/
│   ├── app/
│   │   ├── components/
|   |   |   |   |─── search-cars/
│   │   │   │   |   |   | |───── search-cars.component.ts
│   │   │   │   |   |   | |───── search-cars.component.spec.ts
|   |   |   |   |─── add-car/
│   │   │   │   |   |   | |───── add-car.component.ts
│   │   │   │   |   |   | |───── add-car.component.spec.ts
│   │   ├── corre/
│   │   │   ├── services/
|   |   |   |   |────── add-car/
│   │   │   │   |   |   | |──── add-car.service.ts
│   │   │   │   |   |   | |──── add-car.service.spec.ts
|   |   |   |   |────── search-cars/
│   │   │   │   |   |   | |──────── search-cars.service.ts
│   │   │   │   |   |   | |──────── search-cars.service.spec.ts
|   |   |   |   |────── update-car/
│   │   │   │   |   |   | |─────── update-car.service.ts
│   │   │   │   |   |   | |─────── update-car.service.spec.ts
│   │   ├── shared/
│   │   │   ├── interface/
│   │   │   |   | |────── i-add-car-request.ts
│   │   │   |   | |────── i-search-car-request.ts
│   │   │   |   | |────── i-search-car-response.ts
│   │   │   |   | |────── i-update-car-response.ts
│   ├── assets/
│   │   ├── img/
│   │   ├── mock/
│   │   │   │ ├─ m-add-car.mock.ts
│   │   │   │ ├─ m-cars-request.mock.ts
│   │   │   │ ├─ m-cars-response.mock.ts
│   │   │   │ ├─ m-update-car.mock.ts
│   ├── environments/
│── jest.config.js
│── package.json
│── README.md

```

## 📌 Contribuições

Fique à vontade para abrir issues e pull requests caso tenha sugestões ou melhorias para o projeto!



<h1 align="center">💻 Desenvolvido Por: Gilberto Júnior</h1>

