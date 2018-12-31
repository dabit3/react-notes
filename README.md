# Building a ‘Notes’ app with Amplify Framework and React

### Overview
In this tutorial, you will create a React 'Notes’ app that connects to a serverless backend via the Amplify Framework. The app will provide user authentication with Amazon Cognito, in-app analytics with Amazon Pinpoint, and it will be connected to a serverless GraphQL backend with AWS AppSync.

![](hero.jpg)

The Amplify Framework enables frontend developers to build apps quickly with a simplified workflow. In this tutorial, you will learn how to create a cloud-enabled React app from scratch using the Amplify Framework.

#### By completing this tutorial, you will be able to:

- Bootstrap a React app with Create React App CLI
- Install and configure the Amplify Framework in your app
- Manage your app’s backend with the Amplify CLI
- Add cloud-based authentication to your app
- Create and use a GraphQL backend to store data

### Prerequisites
You need to have a basic understanding of JavaScript/TypeScript, Node.js, and NPM to complete this tutorial.

### Source Code
You can directly copy and paste code snippets from the tutorial as you are following the steps. Alternatively, if you would like to get right to the source code for the final version of the tutorial’s code, please visit the Github Repo.

## Content
Here is the sequence of the tutorial:

Part 1: Creating the App
Part 2: Adding Cloud Features
Part 3: Enabling GraphQL Backend

# Part 1: Create a React App

This section introduces React basics. You will learn how to bootstrap a new React app with the Create React App CLI. In subsequent parts of the tutorial, you will gradually add new cloud functionality to your application.

> If you want to integrate Amplify Framework into an existing React application, you can skip Part 1 and start directly to Part 2. Also, follow the directions that are labeled as Existing App to integrate a cloud feature into your app.

### Install the Create React App CLI and Create a New Project
The easiest way to create an React application is with the Create React App Command Line Interface (CLI). To install the CLI, run the following command in your terminal:

```sh
$ npm install -g create-react-app
```

After the installation, go to a location where you wish to start your new application project and execute the following command to create a new React app:

```sh
$ create-react-app amplify-notes
```

### Install Amplify Framework Libraries

Now, you have a new React project called react-notes! You can switch to your project’s root folder and install required Amplify Framework libraries.

```sh
$ cd react-notes
```

Amplify Framework provides npm packages for installation. aws-amplify is the core package and aws-amplify-react includes UI components and React modules that you will use when building you React app.

Run the following commands to install required packages:

```sh
$ npm install aws-amplify
$ npm install aws-amplify-angular
```


