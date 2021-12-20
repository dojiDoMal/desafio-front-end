<img width="720" src="https://gcdn.pbrd.co/images/RwEH6gWOyrW4.png?o=1">

# Desafio Frontend

Clone esse repositório e inicie **agora mesmo!**

## Objetivo

Criar um app utilizando React Native e consumir uma API externa.

## API

Use a 'API [Google Books](https://developers.google.com/books/docs/v1/using)' para pegar os dados que serão mostrados no aplicativo.

```js
const query = "harry potter";
fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
```

**NOTA:** Você pode usar a forma de chamar apis de sua escolha (Fetch, Axios, etc).

## Design/Telas

 <br />

[Layout no Figma](https://www.figma.com/file/95FJWgTMrdBVDKbwm1ja8O/frontend-book-app)

 <br />

<img width="581" alt="Screen Shot 2021-04-13 at 10 19 47" src="https://user-images.githubusercontent.com/13947203/114559257-eb55ad00-9c41-11eb-9617-4e7627cc373e.png">

Esse App possui 3 telas, são elas:

### Home

1. Criar uma tela com base no design acima;
2. Os livros devem poder ser clicados e redirecionados para a tela **details**.

### Search

Nesta tela, as funcionalidades abaixo são **Obrigatórias**:

1. Ver uma lista de livros com base na consulta de pesquisa;
2. Tornar possível a busca de mais livros com um botão "Carregar mais";
3. Pesquisar livros pelo nome;
4. Clicar em um dos livros para ver seus detalhes.

### Details

Nesta tela, as funcionalidades abaixo são **obrigatórias**:

1. Exibir todas as informações do livro selecionado.

## O que avaliaremos?

- Organização do código;
- Mensagens e mudanças nos commits;
- Composição/reutilização de componentes;
- Testes unitários;
- O motivo de ter escolhido cada tech da stack;

## Diferenciais

- Usar Typescript
- Documentação no código
- Componentes reutilizáveis
- Usabilidade e feedback para o usuário no carregamento da consulta
- Seguir algum Javascript Style Guide

## Pronto para começar o desafio?

- Faça um "fork" desse repositório na sua conta do Github
- Crie uma branch com o seu nome e sobrenome ex: `patrick-santos`
- Após completar o desafio, crie um "pull request" nesse repositório comparando a sua branch com a master
- Receberemos uma notificação do seu pull request, faremos a avaliação da sua solução e entraremos em contato.
