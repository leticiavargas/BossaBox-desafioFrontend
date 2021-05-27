<h1 align="center"> 
	Desafio Frontend BossaBox 🥰
</h1>
<p align="center"> 👩‍💻 Repositório com o teste da BossaBox para Frontend  👩‍💻 </p>

<img src="https://img.shields.io/badge/web-react-blue">
<img src="https://img.shields.io/badge/node-12.17.0-green">

<h3 align="center"> 
	🚧 Status do projeto🚧
</h3>

<p align="center">
  <img src="https://img.shields.io/badge/versão-1.0.0-green"> - production <br>
</p>


## 📋 Sobre o Desafio
A tarefa é construir um front-end para a aplicação VUTTR (Very Useful Tools to Remember). A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags. Utilize um repositório Git (público, de preferência) para versionamento e disponibilização do código.

O front-end deve ser construído utilizando qualquer framework JavaScript de sua preferência (React, Vue.js, Angular, etc...), utilizando este style guide e seguindo os wireframes do desafio. 


## 🥰 Falando um pouco sobre o projeto
O projeto foi desenvolvido utilizando React JS como framework de desenvolvimento, além da suite de testes JEST. Para a iconografia foi utilizado o core do fontawesome para facilitar a manipulação dos icones disponibilizados no Styleguide do desafio.

O projeto utiliza a API disponbilizada para o desafio, realizando o CRUD essencial para utilização da aplicação. 

A suite de testes é inicial, tendo sido implementada em grupos de componentes.

## 📦 Como executar o projeto

####  🛠  Pré Requisitos

Importante ter configurado ambiente de desenvolvimento com a versão atualizada do <kbd>NodeJS<kdb>.

#### API Rest

A aplicação utiliza a fake API desenvolvida para este projeto e disponível nesse [git](https://gitlab.com/bossabox/challenge-fake-api/tree/master).

```bash
# Clone o repositório da API
$ git@gitlab.com:bossabox/challenge-fake-api.git

# Acesse a pasta do projeto 
$ cd challenge-fake-api

# Instale as dependencias
$ npm install

# Execute a aplicação
$ npx json-server db.json --port 4000

```

💡 Importante, execute a API usando a indicação de porta 4000 para evitar conflitos. Caso deseje utilizar outra porta é necessário configurar o arquivo  <<< services/api.js >>> na aplicação web.

#### 🎲 Rodando o projeto web

```bash

# Clone este repositório
$ git clone git@github.com:leticiavargas/bossabox-desafio-frontend.git

# Acesse a pasta do projeto no terminal/cmd
$ cd bossa-desafio-frontend

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

#### 🛡 Executando testes de frontend

Foram implementadas duas suites de testes de consistência de componentes de frontend. Para execução dos testes siga os passos a seguir:

```bash
# Acesse a pasta do projeto web
$ cd bossa-desafio-fronted

# Execute o comanto de testes
$ yarn test

```

## 🕹 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto web:

- **[React](https://reactjs.org/)**
- **[Testing Library - Jest](https://testing-library.com/)**
- **[FontAwesome](https://fontawesome.com/)**


## 🦸 Autora

<table>
  <tr>
    <td align="center"><a href="https://github.com/leticiavargas/"><img style="border-radius: 50%;" src="https://pt.gravatar.com/userimage/186334662/ec308d4832e83fdc97fbb724d6f69a70.jpg" width="100px;" alt=""/><br /><sub><b>Letícia Vargas</b></sub></a><br /> </td>
  </tr>

</table>


## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ e ☕ por Letícia Vargas 👋🏽

---
