# toOdo Exam

This project is a exam to the toOdo Software

If you want to access the online version: https://antomarsi.github.io/toOdo_exam/

## Getting Started

To get start the project, just clone the repository and follow the instructions below.

### Prerequisites

You need to have [Node.js](https://nodejs.org) or [Yarn](https://yarnpkg.com/) on your computer.

```
node +8
npm +6
yarn +1.15
```

### Installing the depedencies

After cloning the repo, go to the project folder and run the following command to download all the depedencies.

```
$ npm install
or
$ yarn
```

## The depedencies

 * React-redux
 * styled-components
 * React context
 * React-router
 * Formik
 * Yup
 * Typescript
 * Ant Design
 * reselect (for better filtering)
 * moment (For date display and formatting)
 * redux-logger (for showing the actions in the console)

## Running in Development (locally)

To run the project, just run the following command:
```
$ npm start
or
$ yarn start
```
After the project is compiled, a new page will open in your browser to the URL `http://localhost:3000`, the project has hot-reload, so any update in the code will update the page.

## Building

To build your project, just run the command `build`, a folder `build` will be created in the project folter, the `build` command will run automatically if you `deploy` the project.

```
$ npm run build
or
$ yarn build
```

## Deployment

To publish you project to your [GithubPages](https://pages.github.com/), check if its is enabled in your git repository, after the deploy, a new branch `gh-pages` will be created (if you don't have it).
Run the following command to send a version to your [GithubPages](https://pages.github.com/):
Note: The gh-pages don't work so well using the Windows Command Prompt, use the Ubuntu Subsystem terminal if necessary.

```
$ npm run deploy
or
$ yarn deploy
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details