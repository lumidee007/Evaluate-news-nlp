# Evaluate a News Article with Natural Language Processing
This project requires you to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. This is achieved by using meaningcloud API to fetch the require information after the url input has been validated using regex and the input field is not empty.


## Setup project environment [ dependencies & devDependencies ]

# dependencies
- express
- dotenv
- node-fetch
- valid-url
- webpack
- webpack-cli


# devDependencies
- babel/core
- babel/preset-env
- babel-loader
- clean-webpack-plugin
- css-loader
- html-webpack-plugin
- jest
- jest-webpack
- mini-css-extract-plugin
- node-sass
- optimize-css-assets-webpack-plugin
- sass-loader
- style-loader
- terser-webpack-plugin
- webpack-dev-server
- workbox-webpack-plugin


# Config
- webpack.dev.js for developement mode. 'npm run build-dev' run the script and also start the webpack dev server.
- webpack.prod.js for production mode. 'npm run build-prod' run the script to generate a dist folder.
- npm run start: starts the server on port 1990.
- npm run test: run jest to test our js function.


# Setting up the API_KEY
- API_KEY used is acquire after an account was created with MeaningCloud.
- API_KEY is stored in .env file to prevent public visibility.
- API_KEY is accessible using process.env.API_KEY after a require('dotenv').config();


# Offline functionality
- service workers in webpack is install to ensure site are available even when the local server stop running.
