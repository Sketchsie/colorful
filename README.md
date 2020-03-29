<p align="center">
  <img src="./src/assets/images/logo.png" width="150">
  <h1 align="center">Colorful</h1>
  <p align="center">Infinitas paletas geradas por Scripts, salve elas ou copie uma de suas cores</p>
</p>

<p>
  <img src="./src/assets/pt-br.png" alt="Portuguese" height="16">
  <a href="https://github.com/LaksCastro/colorful/blob/master/README-ptbr.md">Ler em português</a>
</p>

## How to use
Is very simple, open [Colorful Website](https://lakscastro.github.io/colorful/) and browse between infinite color palettes, liked any? Just click on heart button that she will be saved in browser storage,  and for see your saved palettes click on hamburger menu and click in "My Palette's" button, all of these will appear there :) Dark and light theme supported, to toggle click on button in bottom left.

## Project's Goal
Learn to work with Vanilla Js: Routes, DOM manipulation, all together with Webpack 4 and Babel for the app divided into modules and compatible with most browsers

<p align="center">
  <img width="450" src="./src/assets/print/print-1.png">
  <img width="450" src="./src/assets/print/print-2.png">
  <img width="450" src="./src/assets/print/print-3.png">
</p>


## Clone the repository for your machine
Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste. Consulte implantação para obter notas sobre como implantar o projeto em um sistema ativo.

### Requirements
- Node installed
- Npm or Yarn installed

### Installing
1. Clone the repository using the Github client of your choice, or download the repository
Using the Github client via the command line:
```
git clone https://github.com/LaksCastro/colorful.git
```

2. Install the dependencies:
```
npm install || yarn install
```

3. Create your .env.dev file and put the route we are working on as `PATH_BASE = /`, because the Webpack Dev Server uses the local server with this address http://localhost:3000/
```
# .env.dev

BASE_PATH=/
```

Do the same for .env.prod if you are going to use this project in production, but now put the name of the route relative to your server, in the case of this repository: `BASE_PATH=/colorful`

4. Start Webpack Dev Server:
```
npm run start || yarn start
```

5. Generate Build
```
npm run build || yarn build
```

## Built with
* [Webpack 4](https://webpack.js.org/) - Module Bundler.
* [Babel](https://babeljs.io/) - Transpilador JavaScript.
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript) - A linguagem utilizada

## Authors
* [Laks Castro](https://github.com/LaksCastro) - /lakscastro

## Contributors
* [Gustavo](https://github.com/freazesss) - /freazesss

## License
This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) archive for more details.
