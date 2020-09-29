[![Build Status](https://travis-ci.org/careerfairsystems/nexpo.svg?branch=master)](https://travis-ci.org/careerfairsystems/nexpo)
[![codebeat badge](https://codebeat.co/badges/144efba7-bfd8-47d6-807f-a5eda28a9590)](https://codebeat.co/projects/github-com-careerfairsystems-nexpo-master)
[![codecov](https://codecov.io/gh/careerfairsystems/nexpo/branch/master/graph/badge.svg)](https://codecov.io/gh/careerfairsystems/nexpo)
# Welcome
Welcome to Nexpo - Next generation Expo!

This project aims to to supply [ARKAD](https://arkad.tlth.se) with an inhouse project management system.

# Table of Contents
<!-- To update table of contents: npm run update-toc-readme -->

<details>
 <summary>Expand</summary>
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [System Requirements](#system-requirements)
- [Technical Description](#technical-description)
    - [Folder structure](#folder-structure-frontend)
- [Development](#development)
  - [Setup environment](#setup-environment)
  - [Reset Linux environment](#reset-linux-environment)
  - [Implement things](#implement-things)
    - [Development lifecycle](#development-lifecycle)
    - [Testing](#testing)
      - [Recap of TDD:](#recap-of-tdd)
      - [Writing tests for backend](#writing-tests-for-backend)
  - [Helpful things](#helpful-things)
  - [Dev servers](#dev-servers)
  - [Helpful scripts](#helpful-scripts)
  - [Documentation](#documentation)
- [Deployment](#deployment)
- [Who do I contact?](#who-do-i-contact)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
</details>

# System Requirements
The system requires these programs to be installed. The project intends to always follow stable releases. The system is verified to work with the following setup
- Elixir 1.8.2 [Installation instructions](https://elixir-lang.org/install.html)
- Erlang OTP 22.0.7 - Installed automatically with Elixir
- Node 11.9.0 [Installation instructions](https://nodejs.org/en/download/)
- PostgreSQL 10.10 [Installation instruction](https://wiki.postgresql.org/wiki/Detailed_installation_guides)

> When updating system requirements, make sure you update accordingly the following locations
- Node
  - [phoenix_static_buildpack.config](phoenix_static_buildpack.config)
  - [package.json](package.json)
  - [priv/react_app/package.json](priv/react_app/package.json)
  - [.travis.yml](.travis.yml)
- Elixir
  - [mix.exs](mix.exs)
  - [elixir_buildpack.config](elixir_buildpack.config)
  - [.travis.yml](.travis.yml)


# Technical Description

The frontend is configured with [Create React App](https://github.com/facebookincubator/create-react-app). It handles all build configuration which makes our lifes much easier. Do not eject from the default configuration. Create React App has a fantastic [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Folder structure frontend
<details>
 <summary>Structure</summary>

```
./priv/react_app/src/
|-- API/                      # Contains everything related to API
|   |-- index.js              # Exposes entire API as a module
|   |
|   |-- NAME.js               # Defines API for interacting with NAME
|
|-- Components/               # Composable React components
|   |
|   |-- NAME/                 # Defines a component called NAME
|       |-- index.js          # Responsible for connecting component with state
|       |-- NAME.js           # Defines React component
|       |-- NAME.test.js      # Tests for component
|
|-- Screens/                  # React components that are screens
|   |
|   |-- NAME/                 # Defines a screen called NAME
|       |-- index.js          # Responsible for connecting component with state
|       |-- NAME.js           # Defines React component
|       |-- NAME.test.js      # Tests for component
|
|-- Store/                    # Everything related to Store
|   |-- index.js              # Exposes entire store as a module
|   |
|   |-- actions/              # Contains all action creators
|   |   |-- index.js          # Exposes all action creators as module
|   |   |
|   |   |-- NAME/             # Contains action creators for NAME
|   |       |-- index.js      # Exposes all actions creators as a module
|   |       |-- NAME.js       # Defines all actions creators for NAME
|   |       |-- NAME.test.js  # Tests for actions creators
|   |
|   |-- reducers/             # Contains all reducers
|   |   |-- index.js          # Exposes a single combined reducer
|   |   |
|   |   |-- NAME/             # Contains one reducer
|   |       |-- index.js      # Exposes reducer
|   |       |-- NAME.js       # Defines the reducer
|   |       |-- NAME.test.js  # Tests for reducer
|   |
|   |-- selectors/            # Contains all selector creators
|   |   |-- index.js          # Exposes all selector creators as module
|   |   |
|   |   |-- NAME/             # Contains selector creators for NAME
|   |       |-- index.js      # Exposes all selectors creators as a module
|   |       |-- NAME.js       # Defines all selectors creators for NAME
|   |       |-- NAME.test.js  # Tests for selectors creators
|   |
|   |-- ActionTypes.js        # Defines all action types
|
|-- TestHelper/               # Defines helpers that are helpful in tests
|   |-- index.js              # Exposes all helpers as a module
|   |
|   |-- NAME.js               # Defines a single helper
|
|-- Util/                     # Miscellaneous utility helpers
|   |-- NAME.js               # Defines a single helper
|
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- README.md
```
</details>

</details>

# Development
## Setup environment
1. Make sure you have installed all [system requirements](#system-requirements). Then open a terminal and do the following steps
2. Install the following programs
    - ```npm``` - version 5 or higher. [Installation instructions](https://www.npmjs.com/get-npm)
3. Navigate yourself to the project root using the terminal.
4. Based on your running dist do one of the following:
    - Mac:
      - Execute ```make install-mac```
    - Linux:
      - Open the following file: ```config/dev.exs```
      - After ```poolsize: 10 ```, add ```username: "nexpo", password: "nexpo"```. Do not forget to add a ```,``` after poolsize.
      - Do the same thing for ```config/test```
      - Execute ```make install-linux```
5. Grab a cup of coffee!
6. Start the stack with ```npm run dev```

## Implement things

### Development lifecycle
1. Checkout and pull latest from master
2. Make a local branch with `git checkout -b featurename`
3. Install dependencies (if necessary) with `yarn add`
4. Migrate or Reset database (if necessary) with `mix ecto.migrate` or `mix ecto.reset`
5. Populate database with mock data with `mix run priv/repo/seeds.exs`
6. Start the frontend with `yarn start`
7. Create your feature with [TDD](#recap-of-tdd)
8. Commit, and make a pull request
9. Wait for pull request to be accepted by someone
    - Review others pull requests
10. If pull request is merged, and all tests pass, your feature is automatically deployed to production

### Testing
This project is developed with [TDD](https://en.wikipedia.org/wiki/Test-driven_development). \
This means that all code should be tested. We are urging all developers to follow this for the following reasons
- You will know for sure if you break anything when touching the code
- We are changing developers every year. You will make everything easier for the next team!

#### Recap of TDD:
1. Write a test
2. Make sure it fails
3. Implement code that makes it pass
4. Make sure your code is pretty and scalable

These are some commands to help you run all tests

| Command                      | Description                     |
|------------------------------|---------------------------------|
| `yarn test`                  | Runs all tests                  |
| `yarn testwatch-frontend`    | Starts testwatcher for frontend |

#### Writing tests for frontend
- All tests should be beside what is it testing. If there is a component named ```Component```, its test should be beside it and named ```Component.test.js```
- The frontend is configured with [jest](https://facebook.github.io/jest/) as its testrunner.
- For react tests, the project is configured with [enzyme](https://github.com/airbnb/enzyme). This makes it easy to unit test a component
- There are test helpers in [/priv/react_app/src/TestHelper](/priv/react_app/src/TestHelper)

## Helpful things


## Dev servers
| Command                | Description                |
|------------------------|----------------------------|
| `yarn start`           | Start frontend             |

- Backend server is running on localhost:4000
  - Visit [localhost:4000/sent_emails](http://localhost:4000/sent_emails) to see emails sent in development
- Frontend server is run on localhost:3000
  - All api-calls are proxied transparently to the backend

## Helpful scripts


## Documentation

## Setup your Editor
VS Code

    Install Prettier
    Install Eslint
    Install Flow Language Support

Atom

    Install Prettier
    Install Eslint
    Install Flow

Update your settings

    Enable "Set Editor Format On Save"
    Disable JavaScript format and validate
    Disable Typescript format and validate
    Enable "Prettier Eslint Integration"
    Enable "Flow Use NPM Packaged Flow"
    Enable "Flow Run On All Files"

# Deployment


# Who do I contact?
- Add Astons information here
- [Mustafa Albayati](mailto:albayati96@gmail.com) (Head Of IT 2020)
