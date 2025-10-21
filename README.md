# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

This project uses [pnpm](https://pnpm.io/) for package management. Make sure you have pnpm installed:

```bash
npm install -g pnpm
```

## Installation

Install dependencies using pnpm:

```bash
pnpm install
```

## Available Scripts

In the project directory, you can run:

### `pnpm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `pnpm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `pnpm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `pnpm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### GitHub Actions

This project includes several GitHub Actions workflows for automated testing and code quality:

#### Available Workflows

1. **CI Pipeline** (`ci.yml`): Runs tests, linting, and builds on multiple Node.js versions
2. **Security Audit** (`security.yml`): Runs security audits and vulnerability scanning
3. **Dependency Updates** (`dependency-update.yml`): Automated dependency management
4. **Release Management** (`release.yml`): Handles versioning and releases
5. **Deploy to GitHub Pages** (`deploy-gh-pages.yml`): Deploys the build to GitHub Pages

#### Workflow Features

- **Multi-version Testing**: Tests on Node.js 18.x and 20.x
- **Security Audits**: Automated vulnerability scanning
- **Coverage Reports**: Code coverage tracking with Codecov integration
- **Automated Deployment**: Builds and deploys to GitHub Pages
- **Dependency Management**: Automated dependency updates and security patches

### Deployment

#### Manual Deployment

You can deploy the application manually:

```bash
# Build the project
pnpm build

# The build folder contains the production-ready files
# You can deploy the contents of the build folder to any static hosting service
```

#### Local Testing

To test the production build locally:

```bash
# Build the project
pnpm build

# Serve the build folder locally
pnpm analyze
```

This will start a local server serving the production build at `http://localhost:3000`.

### `pnpm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
