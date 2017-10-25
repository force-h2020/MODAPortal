# MODA Portal

MODA Portal is a tool to collect MODA workflow information.

## Quickstart
**Note : Please make sure your MongoDB is running.**

First thing is to clone the repo and start the API server:

```
  git clone https://github.com/force-h2020/MODAPortal
  cd MODAPortal
  yarn install
  yarn build
  yarn start
```

Then start the react client:

```
  cd MODAPortal/client
  yarn install
  yarn start
```

Then open [http://localhost:3000](http://localhost:3000) to see the app.


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
