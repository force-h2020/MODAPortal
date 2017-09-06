FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

ADD package.json ./package.json
RUN yarn install

ADD server ./server

CMD yarn start

EXPOSE 8000
