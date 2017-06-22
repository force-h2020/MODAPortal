![](http://res.cloudinary.com/hashnode/image/upload/w_200/v1466495663/static_imgs/mern/v2/mernio-logo.png)

# MODA Management Portal
![title](https://travis-ci.org/Fraunhofer-IWM/modaportal.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


MODA Portal is a tool to collect MODA workflow information. This tool is based on [MERN](https://github.com/Hashnode/mern-starter) scaffolding app.


## Quickstart

```
  git clone https://github.com/Fraunhofer-IWM/MODAPortal
  cd MODAPortal
  yarn install
  yarn start
```

**Note : Please make sure your MongoDB is running.** For MongoDB installation guide see [this](https://docs.mongodb.org/v3.0/installation/). Also `npm3` is required to install dependencies properly.

## Available Commands

1. `yarn run start` - starts the development server with hot reloading enabled

2. `yarn run bs` - bundles the code and starts the production server

3. `yarn run test` - start the test runner

4. `yarn run watch:test` - start the test runner with watch mode

5. `yarn run cover` - generates test coverage report

6. `yarn run lint` - runs linter to check for lint errors

## Try with Docker
In order to run the portal, the fastest way is using docker. You need docker and docker-compose installed on your machine and your user should be member of docker group (in unix-like machines).
```
  git clone https://github.com/Fraunhofer-IWM/MODAPortal
  cd MODAPortal
  docker-compose -f docker-compose.yml up
```
You even don't need to clone the repository, all you need is the `docker-compose.yml` file. After running the above commands the portal should be up and running at `localhost:8000`.

## License
MODAPortal is released under the [MIT License](http://www.opensource.org/licenses/MIT).
