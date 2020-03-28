<p align="center">
  <img src="./src/assets/images/logo.png" width="150">
  <h1 align="center">Colorful</h1>
  <p align="center">Infinitas paletas geradas por Scripts, salve elas ou copie uma de suas cores</p>
</p>

<p>
  <img src="./src/assets/en.png" alt="Portuguese" height="16">
  <a href="https://github.com/LaksCastro/colorful/blob/master/README.md">Read in English</a>
</p>

## Como utilizar
É simples, abra [Site da Colorful](https://lakscastro.github.io/colorful/) e navegue entre as infinitas paletas, gostou de alguma? Basta clicar no coração, que ela estará salva na sua sessão do navegador, e para acessa-la basta ir até a guia "My Palette's', todas elas estarão lá :) Há tema Dark e Light, use o que te preferir, para alternar entre eles, basta clicar no pequeno botão no canto inferior esquerdo com ícone de pincel.

## Objetivo do projeto
Aprender a criar rotas e manipular o DOM via JavaScript e a configurar utilizar o Webpack e Babel para que a aplicação seja divida em módulos e compatível com a maioria dos navegadores, tudo sem utilizar nenhuma biblioteca ou framework JavaScript como React ou Vue

<p align="center">
  <img width="450" src="./src/assets/print/print-1.png">
  <img width="450" src="./src/assets/print/print-2.png">
  <img width="450" src="./src/assets/print/print-3.png">
</p>


## Quer ler um pouco de código?
Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste. Consulte implantação para obter notas sobre como implantar o projeto em um sistema ativo.

### Requisitos
- Node instalado
- Npm ou Yarn instalado

### Instalando
1. Clone o repositório usando o cliente do Github de sua preferência, ou faça o download do repositório  
Usando o cliente do Github via linha de comando:  
```
git clone https://github.com/LaksCastro/colorful.git
```

2. Instale as dependências:  
```
npm install || yarn install
```

3. Crie seu seu arquivo .env.dev e coloque a rota que estamos trabalhando como `PATH_BASE=/`, pois o Webpack Dev Server utiliza o servidor local com este endereço http://localhost:3000/
```
# .env.dev

BASE_PATH=/
```

Faça o mesmo para o .env.prod se for usar este projeto em produção, porém agora coloque o nome da rota relativa ao seu servidor, no caso deste repositório, `BASE_PATH=/colorful`

4. Inicie o Webpack Dev Server:
```
npm run start || yarn start
```

5. Parar fazer a Build: 
```
npm run build || yarn build
```

## Construido com  
* [Webpack 4](https://webpack.js.org/) - Module Bundler.
* [Babel](https://babeljs.io/) - Transpilador JavaScript.
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript) - A linguagem utilizada

## Autores
* [Laks Castro](https://github.com/LaksCastro) - /lakscastro

## Contribuidores
* [Gustavo](https://github.com/freazesss) - /freazesss

## Licença
Esse projeto esta licensiado abaixo da licensa da MIT - veja o [LICENSE.md](LICENSE.md) arquivo para mais detalhes.
