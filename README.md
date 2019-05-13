
### Jobviewer - test project for Jobylon

Basic *React* site that uses *react-bootstrap* and *react-router*. Site can be visited [at this Link](https://merapelsin.github.io/jobviewer/).

Root component being src/app.js, where react-bootstrap's most action is (aside from linking) that decides what component should be rendered based on url path. 

Then we have src/components/home.js that fetches the data from the API by calling src/components/data/dataHandler.js which fetches -> formats -> stores and then finally returns an array with short adverts for home to map to src/components/gui/shortCard.js components.

These then link to their full versions, which goes by id and matching url with src/components/gui/fullCard.js.

fullCard then uses a bunch of smaller components in the src/components/gui/cardParts to create the full version. 

src/components/data/dataHandler.js 's job is just to fetch and return adverts depending on what's being requested. How this file itself is written gets controlled by what the API can do and what it returns. For example, in the case of no data already fetched if you go directly to a full advert - instead of fetching *all* adverts just fetch 'active' one based on id.

Most time for this projects has gone to styling, which without a styleguide aint the best and so far isn't really all that mobile friendly. Works in Firefox and chrome, and almost completely in Edge!

Leaving most of create-react-app's readme for some commands - but don't forget to do npm install in the root folder before the commands down below.
***
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
