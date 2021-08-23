# Teste de Desenvolvedor Frontend-Jr para Cast group:

Projeto criado com [React.js](https://pt-br.reactjs.org/), ultilizando [TypeScript](https://www.typescriptlang.org/), [Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html), [Context API](https://pt-br.reactjs.org/docs/context.html), [Styled Components](https://styled-components.com/), [Chakra-UI](https://chakra-ui.com/), [React-icons](https://react-icons.github.io/react-icons/), [React-Router-DOM](https://reactrouter.com/web/guides/quick-start), [Axios](https://axios-http.com/).

## Iniciando o Projeto

Baixe o repositório ultilizando o comando :
```
 git clone 'https://github.com/soares-vinicius/teste_castgroup.git'
```
 
### `Iniciando o Front`

Na pasta onde se encontra o repositório rode os comandos abaixo:

- Yarn install

Instale todas as dependências do projeto com :
```
yarn install
```

- Yarn start

Inicialize o projeto com :
```
yarn start
```

### `Iniciando o Back`

Para rodar o serviço, é necessário instalar o json-server:
```
npm install -g json-server
```

Após isso, rodar o comando abaixo na pasta, __fake-backend:

```
json-server --watch products.json --port 3004
```

Isso irá disponibilizar uma api REST rodando no endereço:
http://localhost:3004/products.

## Objetivos do teste:
Seu objetivo é montar uma página de listagem de produtos, utilizando dos 
componentes do Material-UI (cards, botões etc.).

O layout deve ser como de um site de vendas convencional, com uma listagem de 
produtos, no card do produto um ícone de incluir no carrinho, e um ícone de 
carrinho de compras no topo do site.

O ícone do carrinho de compras deve exibir uma badge com a quantidade de itens 
presente no carrinho.

A tela de listagem de produtos deve:
- Listar produtos
  - Ao entrar no projeto, deve exibir os produtos na listagem com foto, 
título e preço formatado em reais;
  - Ao clicar no produto da lista, deve exibir os detalhes de um produto 
individual (utilizar por exemplo um modal, ou abrir uma nova página de 
detalhes);
- Permitir comprar
  - Ao clicar em comprar, e o produto não estiver no carrinho, deve ser 
adicionado;
  - Ao clicar em comprar, e o produto já existir no carrinho, deve ser 
incrementado em 1;
  - Exibir resumo do carrinho
  - Exibir no ícone do carrinho uma badge com quantidade de itens;
  - Exibir ao lado do ícone, o valor total da compra;
- O carrinho deve:
  - Permitir remover itens;
  - Ao remover, liberar o estoque do produto;
  - Exibir o somatório total dos itens incluídos;

