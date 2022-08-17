![logo](/src/assets/logo.png)

![GitHub All Releases](https://img.shields.io/github/languages/top/vveewwee/P12_React_D3.js?color=%23FF0101&style=flat-square)

![GitHub top language](https://img.shields.io/github/languages/top/vveewwee/P12_React_D3.js?label=react&logo=react)
# SportSee Application

---

### FrontEnd

---

# Installation

> You will need to have installed [Node.js](https://nodejs.org/en/).
> (In case of a doubt `npm --version` will clarify the situation).

## Front-End Cloning

```npm
$ git clone https://github.com/vveewwee/P12_React_D3.js <name of your choice>
```

## Back-End Cloning

---

> In order to retrieve the Data, we're suggesting to clone the repo in the same folder as the FrontEnd repo.

```npm
$ git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard
```

## Dependencies

```npm
$ npm install --save-dev
```

```npm
$ yarn install
```

## Launch
```diff
!In the project directory, run:
```
```npm
$ npm start
```
```diff
!Runs the app in the development mode.\
!Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

!The page will reload when you make changes.\
!You may also see any lint errors in the console.
```
> The right path for the time being is [here](http://localhost:3000/user)

## Launching the Doc

---

Open with Live Server, or Lauch the docs/index.html file on your browser
`http://127.0.0.1:5501/docs`
Or simply check it directly from the GitHub repo, on the docs folder.

---

## A small project introduction

This project, is the 12th project of the Javascript-React Application Developement course by OpenClassroom.

### React

The choice of [React] framewrok was made by the project.

### D3.js

The Charting Library for the Data visualization choice were to be personally made between [Recharts] (built on React components, a lightweight dependency on D3 submodules) or [D3.js].
The choice was easy to made, amongst other reasons, D3.js offers more powerfull tools, interesting visualizations, data-driven documents and independency from any frameworks, although familiarizing with it, takes extra time.

### Jsdoc / Better-docs

The documentation is made with [Jsdoc](https://github.com/jsdoc/jsdoc)and its theme (plugin) [Better-docs](https://github.com/SoftwareBrothers/better-docs) which provides a custom @component plugin. It parses the PropTypes and generates the documentation from the React Components.

As for the styling, you will find some internal css and some tagged template literals, made with `styled-components`. For the js files holding the charts, separate css folders are imported to add extra effects on the chart components with pseudoclasses like :hover etc.

### Axios

In order to retrieve the Data, the isomorphic promise-based HTTP client Axios is installed to manage the calls.
