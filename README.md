![](http://res.cloudinary.com/hashnode/image/upload/w_200/v1466495663/static_imgs/mern/v2/mernio-logo.png)

# MODA Management Portal

MODA Portal is a tool to collect MODA workflow information.

## Quickstart

```
  git clone https://github.com/Fraunhofer-IWM/MODAPortal
  cd MODAPortal
  yarn install
  yarn start
```

**Note : Please make sure your MongoDB is running.** For MongoDB installation guide see [this](https://docs.mongodb.org/v3.0/installation/). Also `npm3` is required to install dependencies properly.

## Available Commands

1. `yarn start` - starts the development server with hot reloading enabled

2. `yarn bs` - bundles the code and starts the production server

3. `yarn test` - start the test runner

4. `yarn lint` - runs linter to check for lint errors

## Try with Docker
In order to run the portal, the fastest way is using docker. You need docker and docker-compose installed on your machine and your user should be member of docker group (in unix-like machines).
```
  git clone https://github.com/force-h2020/MODAPortal
  cd MODAPortal
  docker-compose up
```
You even don't need to clone the repository, all you need is the `docker-compose.yml` file. After running the above commands the portal should be up and running at `localhost:8000`.

## License
MODAPortal is released under the [MIT License](http://www.opensource.org/licenses/MIT).

This tool was initially based on [MERN](https://github.com/Hashnode/mern-starter) scaffolding app.