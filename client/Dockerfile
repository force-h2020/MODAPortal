FROM node:latest

RUN mkdir -p /usr/src/app/client
WORKDIR /usr/src/app/client

ENV PATH /usr/src/app/client/node_modules/.bin:$PATH

RUN yarn global add serve

ADD package.json .
ADD yarn.lock .
RUN yarn install

ADD public ./public
ADD src ./src

RUN yarn build

CMD serve -s build

EXPOSE 5000