# Project Name

> GROUPONe Clone

## Related Projects

  - [Product Slide-Show](https://github.com/FTDJ-Enterprises/groupon-clone-slide-show)
  - [Product Reviews](https://github.com/FTDJ-Enterprises/groupon-reviews)

## Usage

**Set the Module Server Locations**

1. Create a `.env` file at root: `touch .env`.
2. Fill in the url locations of the servers for the slide-show and reviews components. For example:

```
SLIDE_SHOW_SERVER=http://some-ec2-server.com:port
REVIEWS_SERVER=http://some-ec2-server.com:port
```

**Start the Server**

`npm start` -- will run the server.

`npm run start:dev` -- will run the development server and watch for changes.

**Test**

This project uses [jest](https://jestjs.io/) for testing.

`npm test` -- runs jest without coverage.

`npm run test:coverage` -- runs jest with coverage.

**Installing Dependencies**

From within the root directory:

```sh
npm install
```

**Docker**

For use with docker, simply update the `.env` file (see above) and then build the docker image: `docker build -t proxy-server .`

Then spin up the container: `docker run -p 3000:3000 proxy-server`.
