# MODA Portal

MODA Portal is a tool to collect MODA workflow information.

## Quickstart

```
  git clone https://github.com/Fraunhofer-IWM/MODAPortal
  cd MODAPortal
  yarn install
  yarn start
```

**Note : Please make sure your MongoDB is running.** For MongoDB installation guide see [this](https://docs.mongodb.org/v3.0/installation/). Also `npm3` is required to install dependencies properly.

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
