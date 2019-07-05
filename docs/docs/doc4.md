---
id: doc4
title: Explicação dos componentes/pastas
sidebar_label: Explicação dos componentes/pastas
---
Resumo rápido sobre os principais componentes

## App.js
Arquivo onde se encontra a configuração das rotas.

## Home
Caminho: `/components/Home`

Apenas chama os principais componentes

## Header
Caminho: `/components/Header`

A ideia: Fazer um componente responsivo e reutilizável em qualquer lugar. Para ele poder ser responsivo, precisei passar como props o tamanho da fonte, sendo assim, dependendo do lugar que seja necessário chamar o Header, é possível setar o tamanho da fonte dinâmicamente.

## SearchForm
Caminho: `/components/SearchForm`

Um dos componentes principais, no qual temos o input, que receberá o nome do usuário e o `<Link>` que redirecionará para a rota, de acordo com o nome do usuário. O `<Link>` além de redirecionar, também envia todo o estado(o usuário do input no caso) desse componente para a rota selecionada.
O componente também foi feito para ser reutilizado em qualquer lugar, de forma semelhante ao Header.

## SearchResult
Caminho: `/components/SearchResult`

Outro componente muito importante, que vai fazer a requisição HTTP para o Github, 3 no caso(para pegar os repositórios, a organização e o usuário em si). Também é nele que existe a implementação do Infinite Scroll, a ordenação de repositórios por número de estrelas, o funcionamento da animação de Loading e a checagem se o usuário existe ou não.

## ProfileInfo
Caminho: `/components/SearchResult/ProfileInfo`

Componente que é chamado dentro de `SearchResult` e tem como finalidade imprimir as informações do perfil pesquisado. Também é nele que tem a manipulação do local que é dado na API, com o link direto para o Google Maps.

## UserRepositories
Caminho: `/components/SearchResult/UserRepositories`

Componente que imprime os repositórios do usuário. Existe uma checagem básica com if ternário, para verificar se a descrição, por exemplo, está vazia. E se estiver, deixar uma mensagem padrão.

## Assets
Caminho: `/assets`

Pasta onde fica as fontes, em formato woff para ser utilizada como font-face(perfomance), junto com a Grid/Reset para auxiliar no desenvolvimento.

## Utils
Caminho: `/utils`

Pasta onde fica o componente de Loading.