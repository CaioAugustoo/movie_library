# Movie Library
Bibliotca de filmes desenvolvida com ReactJS.

## Sobre o projeto 
Este projeto consiste em uma biblioteca de filmes. A mesma mostra os filmes mais populares, mais bem avaliados e os que chegam em breve. Além disso, podemos pesquisar
por qualquer filme (tanto uma pesquisa em português ou em inglês). Os dados vem da [api do TMDB](https://www.themoviedb.org/settings/api?language=pt-BR). (para testar esse projeto
você precisa de uma chave única fornecida no link citado anteriormente)

Quando clicamos em um filme específico, somos redirecionados à uma página que nos mostra os detalhes sobre tal filme. São mostrados dados como: Nome do filme, subtitulo do filme
(se o filme apresentar subtitulos), avaliações do filme, linguagens do filme, minutagem do filme e gêneros do filme. Podemos clicar para visitar o site do filme no TMDB
ou assistir o trailer official do filme dentro da plataforma. É retornado, também, filmes recomendados baseados no filme escolhido.


## Demonstração
Veja abaixo uma foto do projeto.
[![Image from Gyazo](https://i.gyazo.com/bb62c9b03ed277f260b1f36567b14c13.jpg)](https://gyazo.com/bb62c9b03ed277f260b1f36567b14c13)

[![Image from Gyazo](https://i.gyazo.com/68eb357d79950531defb4aebc5b1ac67.png)](https://gyazo.com/68eb357d79950531defb4aebc5b1ac67)

Você pode conferir o resultado final em: https://library-movie.netlify.app

## Objetivo do projeto
Foi realizado este projeto com o intuito de aplicar os conhecimentos adquiridos com React. Foi reforçado, também, os conhecimentos com Hooks, Rotas, API, etc.

## Tecnologias 
Para a realização desse projeto foi utilizado as seguintes tecnologias/linguagens: 
- [ReactJS](https://pt-br.reactjs.org) para criação da interface
- [TMDB API](https://www.themoviedb.org/settings/api?language=pt-BR) para acessarmos os dados
- [React Router](https://reactrouter.com/web/guides/quick-start) para gerenciarmos as rotas
- [Font Awesome](https://reactrouter.com/web/guides/quick-start) para o uso de ícones
- [Undraw](https://undraw.co) para algumas ilustrações
- [styled-components](https://styled-components.com) para a estilização
- [react-tooltip](https://www.npmjs.com/package/react-tooltip) para o uso de tooltips

## Instalação
Para que este rode em sua máquina, siga os passos abaixo:

```bash
# Clone o repositório em alguma pasta em sua máquina
$ git clone https://github.com/CaioAugustoo/movie_library

# Entre no repositório
$ cd movie-library

Instale as dependencias digitando no termimal:
$ yarn install

Rode a aplicação no modo de desenvolvimento.
$ yarn start

Abra http://localhost:3000 no seu navegador para visualizar o projeto
```

##### PS: PROJETO TOTALMENTE INSPIRADO NO: https://github.com/fidalgodev/movie-library-react (https://github.com/fidalgodev)!! 
##### FEITO APENAS PARA FINS DIDÁTICOS
