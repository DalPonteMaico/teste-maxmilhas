## Descrição

Projeto criado com [Nest](https://github.com/nestjs/nest) framework TypeScript.

## Instalação

####Dependências:
Certifique-se de ter instalado:
- Docker
- Node 8 ou superior
- Yarn

```bash
$ yarn
```

## Running the app

```bash
# Rodar mongo db e serviço de visualização web 
$ docker-compose up -d

# Rodar API
$ yarn start
```

####
Pode acessar o swagger da aplicação pelo endereço:
http://localhost:3000/api

Gerenciamento da base de dados do mongo disponível no endereço: 

http://localhost:8081/

``` 
Se banco não for criado automaticamente, 
cria-lo com o nome `restrictions`
``` 

## Test 

Não houve tempo para desenvolvimento apropriado dos teste. mas os testes padrões do nest estão disponíveis:

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
